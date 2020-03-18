import ProjectJson from '@/dataobjects/ProjectJson'
import { ProjectAutoFillKeyValuePair } from '../Autofill'
import { extractContributionGuidelinesUrl } from './github/extractContributionGuidelinesUrl'
import { extractContributors } from './github/extractContributors'
import { extractDescription } from './github/extractDescription'
import { extractLanguages } from './github/extractLanguages'
import { extractLicense } from './github/extractLicense'
import { extractLicenseUrl } from './github/extractLicenseUrl'
import { extractName } from './github/extractName'
import { extractStarsUrl } from './github/extractStarsUrl'
import { extractWebsiteUrl } from './github/extractWebsiteUrl'

export const githubRecognitionRegex = /^(https?:\/\/)?(www\.)?github\.com\/([^\/]+)\/([^\/]+)\/?$/i

export const GITHUB_API_ENDPOINT = 'https://api.github.com'
export const GITHUB_REQUEST_OPTIONS = {
    method: 'GET',
    headers: {
        Accept: 'application/vnd.github.v3+json',
    },
}

export interface GithubRepoResponse {
    // the actual response is bigger
    // for full example see https://developer.github.com/v3/repos/#response-5
    // here, only the fields that are used are added
    // some that are potentially interesting are added, but commented

    name: string

    license: null|{
        // /** lower-case short name */
        // key: string,
        // /** long human-readable name */
        // name: string,
        /** upper-case short name */
        spdx_id: string,
    }

    description?: string
    homepage?: string
    contributors_url: string
    languages_url: string
}

export type GithubResolver<K extends keyof ProjectJson> =
    (githubInfo: {repoOwner: string, repoName: string, repoEndpoint: string}) =>
        (repository: GithubRepoResponse) =>
            ProjectAutoFillKeyValuePair<K>|Promise<ProjectAutoFillKeyValuePair<K>>

function getEndpointForRepository({repoOwner, repoName}: {repoOwner: string, repoName: string}): string {
    return `${GITHUB_API_ENDPOINT}/repos/${repoOwner}/${repoName}`
}

export function githubAutofill(url: string): Promise<Array<ProjectAutoFillKeyValuePair<keyof ProjectJson>>> {
    const matches = url.match(githubRecognitionRegex)

    if (matches == null) {
        return Promise.reject('Could not extract repository owner and name from link')
    }

    const githubInfo = {
        repoOwner: matches[3],
        repoName: matches[4],
        repoEndpoint: '',
    }
    githubInfo.repoEndpoint = getEndpointForRepository(githubInfo)

    const repositoryInfos = fetch(
            githubInfo.repoEndpoint,
            GITHUB_REQUEST_OPTIONS)
        .then((response): Promise<GithubRepoResponse> => response.json())
        .catch((err) => { throw new Error('fetch failed because: ' + err) })

    return Promise.all([
        repositoryInfos.then(extractContributionGuidelinesUrl(githubInfo)),
        repositoryInfos.then(extractContributors(githubInfo)),
        repositoryInfos.then(extractDescription(githubInfo)),
        repositoryInfos.then(extractLanguages(githubInfo)),
        repositoryInfos.then(extractLicense(githubInfo)),
        repositoryInfos.then(extractLicenseUrl(githubInfo)),
        repositoryInfos.then(extractName(githubInfo)),
        repositoryInfos.then(extractStarsUrl(githubInfo)),
        repositoryInfos.then(extractWebsiteUrl(githubInfo)),
    ])
}
