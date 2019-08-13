import Project from '@/dataobjects/Project'

// TODO: proper implementation
// currently only returns mocked data
export function requestAllProjects(): Project[] {
    return mockRequestAllProjects()
}

function mockRequestAllProjects(): Project[] {
    const projGnuHealth = new Project({
        name: 'GNU Health',
        description: `GNU Health is a Free/Libre project for health practitioners, health
institutions and governments. It provides the functionality of Electronic
Medical Record (EMR), Hospital Management (HMIS) and Health Information
System (HIS).`,
        license: 'GLP 3.0',
        programmingLanguages: [ 'python' ],
        rating: 5,
        repoUrl: 'http://hg.savannah.gnu.org/hgweb/health/',
        sdgs: [ 3 ],
        websiteUrl: 'http://health.gnu.org/',
    })

    projGnuHealth.contributionGuidelinesUrl = 'https://en.wikibooks.org/wiki/GNU_Health/Contributing'
    projGnuHealth.logoUrl = 'http://health.gnu.org/assets/img/isologo-gnu-health.png'

    projGnuHealth.frameworksUsed = [ 'Tryton' ]
    projGnuHealth.licenseUrl = 'http://hg.savannah.gnu.org/hgweb/health/file/ea6255706780/COPYING'
    projGnuHealth.naturalLanguages = [
        'English',
        'Spanish',
        'Portuguese',
    ]

    return [
        projGnuHealth,
    ]
}
