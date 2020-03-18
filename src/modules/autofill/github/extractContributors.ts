import { GithubResolver } from '../GithubAutofill'

export const extractContributors: GithubResolver<'numberContributors'> = ({repoName}) => {
    return (repository) => {
        return {
            key: 'numberContributors',
            failed: false,
            value: {
                url: repository.contributors_url,
                format: 'json',
                accessor: 'list',
            },
        }
    }
}
