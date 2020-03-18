import ProjectJson from '@/dataobjects/ProjectJson'
import { githubAutofill, githubRecognitionRegex } from './autofill/GithubAutofill'


export interface ProjectAutoFillKeyValuePair<K extends keyof ProjectJson> {
    key: K
    failed: boolean
    failReason?: string
    value?: ProjectJson[K]
}

export function autofill(url: string): Promise<Array<ProjectAutoFillKeyValuePair<keyof ProjectJson>>> {
    if (githubRecognitionRegex.test(url)) {
        return githubAutofill(url)
    } else {
        return Promise.reject('This domain is not supported')
    }
}
