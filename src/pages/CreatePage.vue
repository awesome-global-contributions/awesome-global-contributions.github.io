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
      <ProjectForm
        @updateJson="updateJson"/>
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
import ProjectForm, { defaultProjectData } from '../components/ProjectForm.vue'
import YamlViewer from '../components/YamlViewer.vue'
import ProjectJson from '../dataobjects/ProjectJson'

@Component({
  components: {
    YamlViewer,
    ProjectForm,
  },
})
export default class CreatePage extends Vue {
  private project!: ProjectJson
  private projectAsYamlString: string = ''

  public created() {
    this.project = defaultProjectData
    this.projectAsYamlString = jsYaml.safeDump(this.project)
  }

  public updateJson(json: any) {
    this.project = json
    // note that this automatically uses a max width of 80
    // as we want for yamllint
    this.projectAsYamlString = jsYaml.safeDump(this.project)
  }
}
</script>

<style lang="stylus" scoped>
  
</style>
