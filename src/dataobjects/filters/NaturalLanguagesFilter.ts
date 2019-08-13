import IFilter from '../IFilter'
import Project from '../Project'

export default class NaturalLanguagesFilter implements IFilter {
    public allowedNaturalLanguages: string[] = []

    public isAccepted(project: Project): boolean {
        return !this.isActive()
            || this.hasAnAllowedLanguage(project)
    }

    private isActive(): boolean {
        return this.allowedNaturalLanguages.length !== 0
    }

    private hasAnAllowedLanguage(project: Project): boolean {
        if (project.naturalLanguages == null) {
            return false
        }

        // this will stop ts error without needing !.
        const projNatLanguages = project.naturalLanguages
        return this.allowedNaturalLanguages.some((pl) =>
            projNatLanguages.includes(pl),
        )
    }
}
