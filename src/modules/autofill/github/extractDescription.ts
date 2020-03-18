import { GithubResolver } from '../GithubAutofill'

export const extractDescription: GithubResolver<'description'> = ({repoName}) => {
    return (repository) => {
        return repository.description != null
            ? {
                key: 'description',
                failed: false,
                value: '(Please improve this!) ' + repository.description,
            }
            : {
                key: 'description',
                failed: true,
                failReason: 'No description given',
            }
    }
}
