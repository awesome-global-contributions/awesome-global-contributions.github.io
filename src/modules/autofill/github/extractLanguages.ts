import { ProjectAutoFillKeyValuePairSuccess } from '@/modules/Autofill'
import { GithubResolver } from '../GithubAutofill'

export const extractLanguages: GithubResolver<'programmingLanguages'> = ({repoName}) => {
    return (repository) => {
        return fetch(repository.languages_url)
            .then((res) => res.json())
            .then((languages): ProjectAutoFillKeyValuePairSuccess<'programmingLanguages'> => {
                return {
                    key: 'programmingLanguages',
                    failed: false,
                    value: Object.keys(languages),
                }
            })
            .catch((err) => {
                return {
                    key: 'programmingLanguages',
                    failed: true,
                    failReason: `failed loading '${repository.languages_url}'`,
                }
            })
    }
}
