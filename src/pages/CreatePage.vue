<template>
  <el-tabs type="border-card">
    <el-tab-pane label="Editor">
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
import ProjectForm from '../components/ProjectForm.vue'
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
