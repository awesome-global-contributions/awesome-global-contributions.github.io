import { GithubResolver } from '../GithubAutofill'

export const extractLicense: GithubResolver<'license'> = () => {
    return (repository) => {
        return repository.license == null
            ? {
                key: 'license',
                failed: true,
                failReason: 'no license in repository',
            }
            : {
                key: 'license',
                failed: false,
                value: repository.license.spdx_id,
            }
    }
}
