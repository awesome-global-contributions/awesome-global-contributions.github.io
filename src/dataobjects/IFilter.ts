import Project from './Project'

export default interface IFilter {
    isAccepted(project: Project): boolean
}
