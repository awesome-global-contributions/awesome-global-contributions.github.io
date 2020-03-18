import { GithubResolver } from '../GithubAutofill'

const possibleContributionFileFolders = [
    '',
    'docs/',
    '.github/',
]

const possibleContributionFileNames = [
    'CONTRIBUTING',
    'Contributing',
    'contributing',
]
const possibleContributionFileEndings = [
    '',
    '.md',
    '.txt',
]

const possibleContributionFilePaths =
    possibleContributionFileFolders.flatMap((folder) =>
        possibleContributionFileNames.flatMap((fileName) =>
            possibleContributionFileEndings.map((ending) =>
                folder + fileName + ending,
            ),
        ),
    )

interface RepoFetchResultSuccess {
    failed: false
    html_url: string
}

interface RepoFetchResultFailed {
    failed: true
}

type RepoFetchResult = RepoFetchResultSuccess|RepoFetchResultFailed

function tryFetchContributingFile(repoEndpoint: string) {
    return (path: string): Promise<RepoFetchResult> => {
        return fetch(repoEndpoint + '/contents/' + path)
            .then((res) => {
                if (res.ok) {
                    return res.json()
                } else {
                    // error is immediately cought below
                    throw new Error()
                }
            })
            .then((res) => {
                return {
                    failed: false,
                    html_url: res.html_url,
                }
            })
            .catch((err) => {
                return { failed: true }
            })
    }
}

export const extractContributionGuidelinesUrl: GithubResolver<'contributionGuidelinesUrl'> = ({repoEndpoint}) => {
    const tryFetch = tryFetchContributingFile(repoEndpoint)

    return (repository) => {
        return Promise.all(possibleContributionFilePaths
                    .map((path) => tryFetch(path)))
            .then((fetches) => {
                const correctFetch = fetches.find((fetch) => !fetch.failed)
                if (correctFetch === undefined || correctFetch.failed) {
                    return {
                        key: 'contributionGuidelinesUrl',
                        failed: true,
                        failReason: 'could not find any Contributing file (only checks for '
                            + '(|docs|.github)[cC](ONTRIBUTNG|ontributing)(|.md|.txt))',
                    }
                } else {
                    return {
                        key: 'contributionGuidelinesUrl',
                        failed: false,
                        value: correctFetch.html_url,
                    }
                }
            })
    }
}
