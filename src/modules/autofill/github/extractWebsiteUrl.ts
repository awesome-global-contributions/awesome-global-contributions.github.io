import { GithubResolver } from '../GithubAutofill'

export const extractWebsiteUrl: GithubResolver<'websiteUrl'> = ({repoName}) => {
    return (repository) => {
        return repository.homepage != null
            ? {
                key: 'websiteUrl',
                failed: false,
                value: repository.homepage,
            }
            : {
                key: 'websiteUrl',
                failed: true,
                failReason: 'No website Url given',
            }
    }
}
