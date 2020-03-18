import { GithubResolver } from '../GithubAutofill'

export const extractLicenseUrl: GithubResolver<'licenseUrl'> = ({repoEndpoint}) => {
    return (repository) => {
        return repository.license == null
            ? {
                key: 'licenseUrl',
                failed: true,
                failReason: 'no license in repository',
            }
            : fetch(repoEndpoint + '/license')
                .then((res) => res.json())
                .then((licenseInfo: { html_url: string}) => {return {
                    key: 'licenseUrl',
                    failed: false,
                    value: licenseInfo.html_url,
                }})
    }
}
