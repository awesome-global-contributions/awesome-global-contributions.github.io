<template>
    <div id="app">
         <ProjectFilters
            :filter="filter"
            v-on:filter-update="updateFilter"
            :projects="projects"/>
         <ProjectList :projects="projects"/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ProjectFilters from './components/ProjectFilters.vue'
import ProjectList from './components/ProjectList.vue'
import CombinedFilter from './dataobjects/filters/CombinedFilter'
import IFilter from './dataobjects/IFilter'
import Project from './dataobjects/Project'
import { getEmptyProjectsMap, ProjectsMap } from './dataobjects/Project'
import { requestAllProjects } from './modules/RequestAllProjects'

@Component({
    components: {
        ProjectList,
        ProjectFilters,
    },
})
export default class App extends Vue {
    public projects: ProjectsMap = getEmptyProjectsMap()
    public filter: IFilter|null = null

    public mounted() {
        requestAllProjects().then((projects) => this.projects = projects)
    }

    private updateFilter(filter: IFilter) {
        this.filter = filter
    }
}
</script>

<style lang="stylus">
    @import 'assets/Typography.styl'
</style>
