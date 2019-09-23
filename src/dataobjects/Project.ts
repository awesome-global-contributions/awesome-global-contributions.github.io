interface LinkInformation {
    name: string
    description?: string
    link: string
}

interface ContributionRequestInformation {
    url: string
    format: string
    accessor: string
}

export default class Project {
    // necessary properties
    public name: string
    public description: string
    public license: string
    public programmingLanguages: string[]
    public rating: number
    public repoUrl: string
    public websiteUrl: string
    public sdgs: number[]

    // generated fields properties
    public contributionGuidelinesUrl?: string
    public logoUrl?: string
    public starsUrl?: string
    public numberContributors?: ContributionRequestInformation

    // optional fields properties
    public ratingComment?: string
    public otherLinks?: LinkInformation[]
    public frameworksUsed?: string[]
    public licenseUrl?: string
    public naturalLanguages?: string[]
    public naturalLanguagesLink?: string

    // constructor
    constructor(
        {   // necessary
            name, description, license, programmingLanguages,
            rating, repoUrl, websiteUrl, sdgs,
            // generated
            contributionGuidelinesUrl, logoUrl, starsUrl,
            numberContributors,
            // optional
            ratingComment, otherLinks, frameworksUsed,
            licenseUrl, naturalLanguages, naturalLanguagesLink,
        }:
        {
            name: string,
            description: string,
            license: string,
            programmingLanguages: string[],
            rating: number,
            repoUrl: string,
            websiteUrl: string,
            sdgs: number[],
            // generated
            contributionGuidelinesUrl?: string,
            logoUrl?: string,
            starsUrl?: string,
            numberContributors?: ContributionRequestInformation,
            // optional
            ratingComment?: string,
            otherLinks?: LinkInformation[],
            frameworksUsed?: string[],
            licenseUrl?: string,
            naturalLanguages?: string[],
            naturalLanguagesLink?: string,
        }) {
        this.name = name
        this.description = description
        this.license = license
        this.programmingLanguages = programmingLanguages
        this.rating = rating
        this.repoUrl = repoUrl
        this.websiteUrl = websiteUrl
        this.sdgs = sdgs
        // generated
        this.contributionGuidelinesUrl = contributionGuidelinesUrl
        this.logoUrl = logoUrl
        this.starsUrl = starsUrl
        this.numberContributors = numberContributors
        // optional
        this.ratingComment = ratingComment
        this.otherLinks = otherLinks
        this.frameworksUsed = frameworksUsed
        this.licenseUrl = licenseUrl
        this.naturalLanguages = naturalLanguages
        this.naturalLanguagesLink = naturalLanguagesLink
    }
}
