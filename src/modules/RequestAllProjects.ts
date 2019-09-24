import Project from '@/dataobjects/Project'
import { ProjectsMap } from '../dataobjects/Project'

const PROJECTS_REQUEST_LINK =
    'https://raw.githubusercontent.com/awesome-global-contributions/' +
    'awesome-global-contributions/master/dist/projects_by_sdg.json'

// TODO: proper implementation
// currently only returns mocked data
export async function requestAllProjects(): Promise<ProjectsMap> {
    return fetch(PROJECTS_REQUEST_LINK)
        .then((response) => response.json())
        .then((projectsObject: any) => {
                const convertedProjects: any = {}
                for (let i = 1; i <= 17; ++i) {
                    if (projectsObject[i]) {
                        convertedProjects[i] =
                            projectsObject[i].map((projJson: any) => new Project(projJson))
                    } else {
                        convertedProjects[i] = []
                    }
                }
                return convertedProjects as ProjectsMap
            })
}
