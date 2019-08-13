import IFilter from '../IFilter'
import Project from '../Project'

export default class ProgrammingLanguagesFilter implements IFilter {
    public allowedLanguages: string[] = []

    public isAccepted(project: Project): boolean {
        return !this.isActive()
            || this.hasAnAllowedLanguage(project)
    }

    private isActive(): boolean {
        return this.allowedLanguages.length !== 0
    }

    private hasAnAllowedLanguage(project: Project): boolean {
        return this.allowedLanguages.some((pl) =>
            project.programmingLanguages.includes(pl),
        )
    }
}
