<template>
    <div>
        <div class="top-bar">
            <a v-show="!filterShowed">Menu</a>
            AGC
            <a @click="showFilter">Filter</a>
        </div>        
        
        <ProjectFilters
            :filter="filter"
            v-on:filter-update="updateFilter"
            :projects="projects"
            @filterSummary="updateFilterSummary"/>
    </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator'
import CombinedFilter from '../dataobjects/filters/CombinedFilter'
import IFilter from '../dataobjects/IFilter'
import { ProjectsMap } from '../dataobjects/Project'
import ProjectFilters from './ProjectFilters.vue'

@Component({
    components: {
        ProjectFilters,
    },
})
export default class TopBar extends Vue {
    @Prop() public filter!: CombinedFilter
    @Prop() public projects!: ProjectsMap

    private filterShowed: boolean = false

    @Emit('filter-update')
    public updateFilter(filter: IFilter) {
        return filter
    }

    @Emit('filterSummary')
    private updateFilterSummary(summaries: string[]) {
        return summaries
    }

    private showFilter() {
        this.filterShowed = !this.filterShowed
    }
}
</script>