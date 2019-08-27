export default interface ProjectJson {
    // necessary properties
    name: string
    description: string
    license: string
    programmingLanguages: string[]
    rating: number
    repoUrl: string
    websiteUrl: string
    sdgs: number[]

    // generated fields properties
    contributionGuidelinesUrl?: string
    logoUrl?: string
    starsUrl?: string
    numberContributors?: {
        url: string
        format: string
        accessor: string,
    }

    // optional fields properties
    frameworksUsed?: string[]
    licenseUrl?: string
    naturalLanguages?: string[]
}
