<template>
  <el-tabs type="border-card">
    <el-tab-pane label="Editor">
      <p>
        <a target="_blank" href="https://github.com/awesome-global-contributions/awesome-global-contributions/blob/master/CONTRIBUTING.md">Click here</a>
        to see a detailed walk-through on how to add a project to this list.
      </p>
      <p>
        It is recommended to first fill out the url of the project and then let us auto-fill
        as much as possible through the button that will appear when you enter an URL.
        Please do check whether those values are correct, though.
      </p>
      <p>
        Thank you for adding a project to this list ♥        
      </p>
      <el-button
        v-if="project != undefined && project.repoUrl != undefined && /https?:\/\/.*\..*/.test(project.repoUrl)"
        type="primary"
        :loading="autofillInProgress"
        @click="autofill">Autofill based on URL: '{{ project.repoUrl }}'</el-button>
      <ProjectForm
        :project="project"
        @updateProject="updateProject"/>

      <el-dialog
          title="Some properties could not be auto-filled"
          :visible.sync="autofillFailsDialogVisible"
          width="50%"
          center>
        <span>It seems like some autofills failed:</span>

        <ul>
          <li
              v-for="fail in autofillFailures"
              :key="fail.key"
              >
            {{ fail.key }}: {{ fail.failReason }}
          </li>
        </ul>

        <p
            v-for="msg in autofillFailureAdditionalMessages"
            :key="msg"
            >
          {{msg}}
        </p>

        <span slot="footer" class="dialog-footer">
          <el-button
              type="primary"
              @click="autofillFailsDialogVisible = false; autofillFailureAdditionalMessages = []; autofillFailureAdditionalMessages = []"
              >
            Okay, got it
          </el-button>
        </span>
      </el-dialog>
    </el-tab-pane>
    <el-tab-pane label="Preview">
      <YamlViewer
        :yaml="projectAsYamlString"/>
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts">
import jsYaml from 'js-yaml'
import { Component, Vue } from 'vue-property-decorator'
import ProjectForm from '../components/ProjectForm.vue'
import YamlViewer from '../components/YamlViewer.vue'
import ProjectJson from '../dataobjects/ProjectJson'
import { autofill, ProjectAutoFillKeyValuePair, ProjectAutoFillKeyValuePairFailed } from '../modules/Autofill'

const defaultProjectData: ProjectJson = {
      name: '',
      description: '',
      license: '',
      programmingLanguages: [],
      rating: 0,
      repoUrl: '',
      websiteUrl: '',
      sdgs: [],
    }

@Component({
  components: {
    YamlViewer,
    ProjectForm,
  },
})
export default class CreatePage extends Vue {
  private project!: ProjectJson
  private projectAsYamlString: string = ''

  private autofillInProgress: boolean = false
  private autofillFailsDialogVisible: boolean = false
  private autofillFailures: Array<ProjectAutoFillKeyValuePairFailed<keyof ProjectJson>> = []
  private autofillFailureAdditionalMessages: string[] = []

  public created() {
    this.project = defaultProjectData
    this.projectAsYamlString = jsYaml.safeDump(this.project)
  }

  public updateProject(json: any) {
    this.project = json
    // note that this automatically uses a max width of 80
    // as we want for yamllint, but fails if there is no whitespace
    this.projectAsYamlString = jsYaml.safeDump(this.project)
  }

  public autofill() {
    // tslint:disable-next-line:triple-equals
    if (this.project != undefined
        // tslint:disable-next-line:triple-equals
        && this.project.repoUrl != undefined
        && /https?:\/\/.*\..*/.test(this.project.repoUrl)) {
      this.showAutoFillInProgress()

      const repoUrl = this.project.repoUrl

      autofill(repoUrl)
        .then(
          (autoFetchedData) => {
            this.autofillFailures = []

            autoFetchedData.forEach((kvp) => {
              if (kvp.failed) {
                this.autofillFailures.push(kvp)
              // tslint:disable-next-line:triple-equals
              } else {
                this.$set(this.project, kvp.key, kvp.value)
              }
            })

            if (this.autofillFailures.length !== 0) {
              this.autofillFailsDialogVisible = true

              if (this.autofillFailures.length >= 3) {
                this.autofillFailureAdditionalMessages
                  .push('If you\'ve used autofill a lot today note that GitHub only'
                    + 'allows a certain amount of calls to their API')
              }
            }
          },
        )
        .catch((err) => {
          this.autofillFailsDialogVisible = true
          this.autofillFailureAdditionalMessages.push('The entire autofill seems to have failed: ' + err)
        })
        .then(() => {
          this.projectAsYamlString = jsYaml.safeDump(this.project)
        })
        .catch((err) => {
          this.autofillFailsDialogVisible = true
          this.autofillFailureAdditionalMessages.push('Could not properly convert to YAML (most '
            + 'likely an attribute is undefined)')
        })
        .then(() => {
          this.showAutoFillFinished()
        })
    }
  }

  private showAutoFillInProgress(): void {
    this.autofillInProgress = true
  }

  private showAutoFillFinished(): void {
    this.autofillInProgress = false
  }
}
</script>

<style lang="stylus" scoped>
  
</style>
