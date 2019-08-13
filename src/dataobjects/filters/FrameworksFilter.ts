import IFilter from '../IFilter'
import Project from '../Project'

export default class FrameworksFilter implements IFilter {
    public allowedFrameworks: string[] = []

    public isAccepted(project: Project): boolean {
        return !this.isActive()
            || this.hasAnAllowedFramework(project)
    }

    private isActive(): boolean {
        return this.allowedFrameworks.length !== 0
    }

    private hasAnAllowedFramework(project: Project): boolean {
        if (project.frameworksUsed == null) {
            return false
        }

        // this will stop ts error without needing !.
        const projFrameworks = project.frameworksUsed
        return this.allowedFrameworks.some((pl) =>
                projFrameworks.includes(pl),
            )
    }
}
