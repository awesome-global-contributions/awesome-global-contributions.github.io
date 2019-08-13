<template>
    <div class="project-list">
        <div v-for="sdgInfo in sdgProjects" :key="sdgInfo.sdg.number" class="project-sdg-list" :data-sdg="sdgInfo.sdg.number">
            <h1 class="sdg-heading">{{ sdgInfo.sdg.number }}. {{ sdgInfo.sdg.name }}</h1>
            <p class="sdg-description">{{ sdgInfo.sdg.description }}</p>
            <p class="sdg-link"><a :href="sdgInfo.sdg.link">More information…</a></p>
            <ProjectCard v-for="project in sdgInfo.projects" v-bind:key="project.name" :project="project"/>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import Project from '../dataobjects/Project'
import SDG, { getAllSDGs } from '../dataobjects/SDG'
import ProjectCard from './ProjectCard.vue'

@Component({
    components: {
        ProjectCard,
    },
})
export default class App extends Vue {
    @Prop(Array) public projects?: Project[]

    private sdgProjects: Array<{sdg: SDG, projects: Project[]}> = []

    public created() {
        this.addSdgDescriptions()
        this.fillSdgProjects()
    }

    private addSdgDescriptions() {
        const sdgs = getAllSDGs()

        for (const sdg of sdgs) {
            this.$set(this.sdgProjects, sdg.number - 1, {sdg, projects: []})
        }
    }

    @Watch('projects')
    private projectsUpdate() {
        this.clearSdgProjects()
        this.fillSdgProjects()
    }

    private fillSdgProjects() {
        if (!this.projects) {
            return
        }

        for (const project of this.projects) {
            for (const sdgNr of project.sdgs) {
                this.sdgProjects[sdgNr - 1].projects.push(project)
            }
        }
    }

    private clearSdgProjects() {
        this.sdgProjects.forEach((sdgInfo) => sdgInfo.projects = [])
    }
}
</script>

<style lang="stylus" scoped>
</style>