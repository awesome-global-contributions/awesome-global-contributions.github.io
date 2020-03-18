<template>
  <ncform
    v-if="schema"
    :key="updateKey"
    :form-schema="schema"
    form-name="ProjectCreate"
    v-model="projectData"
    @change="updateProject">
  </ncform>
</template>

<script lang="ts">
  import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator'
  import ProjectJson from '../dataobjects/ProjectJson'
  import formSchema from '../dataobjects/ProjectNcFormSchema.json'

  @Component({})
  export default class ProjectForm extends Vue {
    @Prop(Object)
    public project!: ProjectJson

    public projectData!: ProjectJson

    private schema: any = null

    private updateKey: number = Number.MIN_VALUE

    public created() {
      this.projectData = this.project
      this.schema = formSchema
    }

    @Watch('project', {
        deep: true,
      })
    private propUpdate() {
      if (JSON.stringify(this.projectData) !== JSON.stringify(this.project)) {
        this.projectData = this.project
        this.updateKey += 1
      }
    }

    @Emit('updateProject')
    private updateProject(params: any) {
      return this.projectData
    }
  }
</script>

<style lang="stylus" scoped>
  
</style>
