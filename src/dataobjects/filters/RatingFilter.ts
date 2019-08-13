import IFilter from '../IFilter'
import Project from '../Project'

export default class RatingFilter implements IFilter {
    public minRating: number = 0

    public isAccepted(project: Project): boolean {
        return project.rating >= this.minRating
    }
}
