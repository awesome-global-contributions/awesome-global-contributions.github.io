import { GithubResolver } from '../GithubAutofill'

export const extractName: GithubResolver<'name'> = ({repoName}) => {
    return () => {
        return {
            key: 'name',
            failed: false,
            value: repoName,
        }
    }
}
