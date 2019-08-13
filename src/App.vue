<template>
  <div id="app">
    <ProjectList :projects="projects"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ProjectList from './components/ProjectList.vue'
import Project from './dataobjects/Project'
import { requestAllProjects } from './modules/RequestAllProjects'

@Component({
  components: {
    ProjectList,
  },
})
export default class App extends Vue {
  public projects: Project[] = []

  public mounted() {
    this.projects = requestAllProjects()
  }
}
</script>

<style lang="stylus">
</style>
