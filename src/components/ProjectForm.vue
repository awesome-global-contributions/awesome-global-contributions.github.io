<template>
  <ncform v-if="schema"
    :form-schema="schema"
    form-name="ProjectCreate"
    v-model="projectData"
    @change="updateJson">
  </ncform>
</template>

<script lang="ts">
  import { Component, Emit, Vue, Watch } from 'vue-property-decorator'
  import ProjectJson from '../dataobjects/ProjectJson'
  import formSchema from '../dataobjects/ProjectNcFormSchema.json'

  @Component({})
  export default class ProjectForm extends Vue {
    public projectData!: ProjectJson

    private schema: any = null

    public created() {
      this.projectData = {
        name: '',
        description: '',
        license: '',
        programmingLanguages: [],
        rating: 0,
        repoUrl: '',
        websiteUrl: '',
        sdgs: [],
      }

      this.schema = formSchema
    }

    @Emit('updateJson')
    public updateJson(params: any) {
      return this.projectData
    }
  }
</script>

<style lang="stylus" scoped>
  
</style>
