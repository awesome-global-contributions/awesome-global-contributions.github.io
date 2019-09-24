<template>
    <div id="app">
        <ProjectList :projects="projects"/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ProjectList from './components/ProjectList.vue'
import Project from './dataobjects/Project'
import { getEmptyProjectsMap, ProjectsMap } from './dataobjects/Project'
import { requestAllProjects } from './modules/RequestAllProjects'

@Component({
    components: {
        ProjectList,
    },
})
export default class App extends Vue {
    public projects: ProjectsMap = getEmptyProjectsMap()

    public mounted() {
        requestAllProjects().then((projects) => this.projects = projects)
    }
}
</script>

<style lang="stylus">
    @import 'assets/Typography.styl'
</style>
