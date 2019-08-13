import IFilter from '../IFilter'
import Project from '../Project'

export default class SDGsFilter implements IFilter {
    public allowedSDGs: number[] = []

    public isAccepted(project: Project): boolean {
        return !this.isActive()
            || this.hasAnAllowedSDG(project)
    }

    private isActive(): boolean {
        return this.allowedSDGs.length !== 0
    }

    private hasAnAllowedSDG(project: Project): boolean {
        return this.allowedSDGs.some((sdg) =>
            project.sdgs.includes(sdg),
        )
    }
}
