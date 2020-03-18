import { GithubResolver } from '../GithubAutofill'

export const extractStarsUrl: GithubResolver<'starsUrl'> = ({repoOwner, repoName}) => {
    return () => {
        return {
            key: 'starsUrl',
            failed: false,
            value: `https://img.shields.io/github/stars/${repoOwner}/${repoName}` +
                '.svg?style=social&label=Star&maxAge=2592000',
        }
    }
}
