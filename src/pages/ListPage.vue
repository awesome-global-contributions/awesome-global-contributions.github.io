<template>
  <div class="wrapper">
    <ProjectList :projects="projects"/>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import ProjectList from '../components/ProjectList.vue'
  import Project, { getEmptyProjectsMap, ProjectsMap } from '../dataobjects/Project'
  import { requestAllProjects } from '../modules/RequestAllProjects'

  @Component({
    components: {
      ProjectList,
    },
  })
  export default class ListPage extends Vue {
    public projects: ProjectsMap = getEmptyProjectsMap()

    public mounted() {
      requestAllProjects().then((projects) => this.projects = projects)
    }
  }
</script>

<style lang="stylus" scoped>
  
</style>
