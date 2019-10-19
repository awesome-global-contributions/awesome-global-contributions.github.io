<template>
    <div class="project-filter wrapper">
        <FilterWrapper name="Programming Languages" :summary="programmingLanguagesSummary">
            <TagFilter
                :tags="programmingLanguages"
                v-model="filterProgrammingLanguages.allowedLanguages"/>
        </FilterWrapper>
        <FilterWrapper name="Framework" :summary="frameworksSummary">
            <TagFilter
                :tags="frameworks"
                v-model="filterFrameworks.allowedFrameworks"/>
        </FilterWrapper>
        <FilterWrapper name="Natural Languages" :summary="naturalLanguagesSummary">
            <TagFilter
                :tags="naturalLanguages"
                v-model="filterNaturalLanguages.allowedNaturalLanguages"/>
        </FilterWrapper>
        <FilterWrapper name="Minimum Rating" :summary="ratingSummary">
            <NumberFilter
                :maxValue="10"
                v-model="filterRating.minRating"/>
        </FilterWrapper>
    </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator'
import CombinedFilter from '../dataobjects/filters/CombinedFilter'
import FrameworksFilter from '../dataobjects/filters/FrameworksFilter'
import NaturalLanguagesFilter from '../dataobjects/filters/NaturalLanguagesFilter'
import ProgrammingLanguagesFilter from '../dataobjects/filters/ProgrammingLanguagesFilter'
import RatingFilter from '../dataobjects/filters/RatingFilter'
import SDGsFilter from '../dataobjects/filters/SDGsFilter'
import IFilter from '../dataobjects/IFilter'
import Project, { ProjectsMap } from '../dataobjects/Project'
import FilterWrapper from './filter/FilterWrapper.vue'
import NumberFilter from './filter/NumberFilter.vue'
import TagFilter from './filter/TagFilter.vue'

@Component({
    components: {
        FilterWrapper,
        TagFilter,
        NumberFilter,
    },
})
export default class ProjectFilters extends Vue {
    @Prop() public filter!: CombinedFilter
    public combinedFilter: CombinedFilter|null = null
    @Prop() public projects!: ProjectsMap

    private programmingLanguages: string[] = []
    private frameworks: string[] = []
    private naturalLanguages: string[] = []

    private filterFrameworks: FrameworksFilter = new FrameworksFilter()
    private filterNaturalLanguages: NaturalLanguagesFilter = new NaturalLanguagesFilter()
    private filterProgrammingLanguages: ProgrammingLanguagesFilter = new ProgrammingLanguagesFilter()
    private filterRating: RatingFilter = new RatingFilter()
    private filterSDGs: SDGsFilter = new SDGsFilter()

    public mounted() {
        const filter = new CombinedFilter()
        filter.filters = [
                this.filterFrameworks,
                this.filterNaturalLanguages,
                this.filterProgrammingLanguages,
                this.filterRating,
                this.filterSDGs,
            ]
        this.filterUpdate(filter)
    }

    @Emit('filter-update')
    public filterUpdate(filter: IFilter) {
        return filter
    }

    @Watch('filter')
    public onFilterUpdate() {
        if (this.filter) {
            this.combinedFilter = this.filter
        }
    }

    @Watch('projects')
    public onProjectUpdate() {
        if (this.projects) {
            for (let i = 1; i <= 12; ++i) {
                (this.projects as any)[i].forEach((project: Project) => {
                    this.programmingLanguages.push(...project.programmingLanguages)
                    if (project.naturalLanguages) {
                        this.naturalLanguages.push(...project.naturalLanguages)
                    }
                    if (project.frameworksUsed) {
                        this.frameworks.push(...project.frameworksUsed)
                    }
                })
            }
            this.programmingLanguages = this.programmingLanguages
                .filter(this.unique)
                .sort()
            this.frameworks = this.frameworks
                .filter(this.unique)
                .sort()
            this.naturalLanguages = this.naturalLanguages
                .filter(this.unique)
                .sort()
        }
    }

    get programmingLanguagesSummary() {
        return this.filterProgrammingLanguages.allowedLanguages.sort().join(', ')
    }

    get frameworksSummary() {
        return this.filterFrameworks.allowedFrameworks.sort().join(', ')
    }

    get naturalLanguagesSummary() {
        return this.filterNaturalLanguages.allowedNaturalLanguages.sort().join(', ')
    }

    get ratingSummary() {
        return this.filterRating.minRating ? `At least ${this.filterRating.minRating}` : ''
    }

    private unique<T>(value: T, index: number, self: T[]) {
        return self.indexOf(value) === index
    }
}

</script>
