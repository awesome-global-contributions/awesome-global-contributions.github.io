<template>
    <div class="project-list">
        <div v-for="sdgInfo in sdgProjects" :key="sdgInfo.sdg.number" class="project-sdg-list" :data-sdg="sdgInfo.sdg.number">
            <h1 class="sdg-heading">
                <span class="sdg-number" >{{ sdgInfo.sdg.number }}.</span>{{ sdgInfo.sdg.name }}</h1>
            <p class="sdg-description"
               :style="{borderLeftColor:lighterSdgColorFor(sdgInfo.sdg.number)}">{{ sdgInfo.sdg.description }}</p>
            <p class="sdg-link"><a :href="sdgInfo.sdg.link">More information…</a></p>
            <ProjectCard v-for="project in sdgInfo.projects" v-bind:key="project.name" :project="project"/>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import Project from '../dataobjects/Project'
import { ProjectsMap } from '../dataobjects/Project'
import SDG, { getAllSDGs } from '../dataobjects/SDG'
import ProjectCard from './ProjectCard.vue'

@Component({
    components: {
        ProjectCard,
    },
})
export default class ProjectList extends Vue {
    @Prop(Object) public projects?: ProjectsMap

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

        for (let i = 1; i <= 17; ++i) {
            this.sdgProjects[i - 1].projects = (this.projects as any)[i]
        }
    }

    private clearSdgProjects() {
        this.sdgProjects.forEach((sdgInfo) => sdgInfo.projects = [])
    }

    private lighterSdgColorFor(sdgNumber: number) {
        const hexCode = this.sdgProjects[sdgNumber - 1].sdg.color
        return this.hexToRgba(hexCode, 0.5)
    }

    private hexToRgba(hexCode: string, a: number) {
        // expand shorthand hex values
        const shorthandHexRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
        const expandedHexCode = hexCode.replace(shorthandHexRegex, (m, r, g, b) => {
            return r + r + g + g + b + b
        })

        const rgbMatch = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(expandedHexCode)

        if (rgbMatch == null) {
            return `rgba(0,0,0,${a}`
        }

        const resR = parseInt(rgbMatch[1], 16)
        const resG = parseInt(rgbMatch[2], 16)
        const resB = parseInt(rgbMatch[3], 16)
        return `rgba(${resR},${resG},${resB},${a}`
    }
}
</script>

<style lang="stylus" scoped>
    .project-list
        max-width 800px
        margin auto

        .sdg-heading
            .sdg-number
                display inline-block
                min-width 2.5rem
                color: #666

        .sdg-description
            //margin-left .75rem
            padding-top .5rem
            padding-bottom .5rem
            padding-left .5rem
            border-left solid 0.25rem #666
            //color: #444

</style>