import ProjectJson from '@/dataobjects/ProjectJson'
import { githubAutofill, githubRecognitionRegex } from './autofill/GithubAutofill'


export interface ProjectAutoFillKeyValuePairFailed<K extends keyof ProjectJson> {
    key: K
    failed: true
    failReason: string
}

export interface ProjectAutoFillKeyValuePairSuccess<K extends keyof ProjectJson> {
    key: K
    failed: false
    value: ProjectJson[K]
}

export type ProjectAutoFillKeyValuePair<K extends keyof ProjectJson> =
   ProjectAutoFillKeyValuePairFailed<K>|ProjectAutoFillKeyValuePairSuccess<K>

export function autofill(url: string): Promise<Array<ProjectAutoFillKeyValuePair<keyof ProjectJson>>> {
    if (githubRecognitionRegex.test(url)) {
        return githubAutofill(url)
    } else {
        return Promise.reject('This domain is not supported')
    }
}
