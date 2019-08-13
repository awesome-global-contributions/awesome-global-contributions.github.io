import IFilter from '../IFilter'
import Project from '../Project'

export default class CombinedFilter implements IFilter {
    public filters: IFilter[] = []

    public isAccepted(project: Project): boolean {
        return this.filters.every((filter) =>
            filter.isAccepted(project),
            )
    }
}
