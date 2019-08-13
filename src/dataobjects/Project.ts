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
    public numberContributors?: {
        url: string
        format: string
        accessor: string,
    }

    // optional fields properties
    public frameworksUsed?: string[]
    public licenseUrl?: string
    public naturalLanguages?: string[]

    // constructor
    constructor(
        {name, description, license, programmingLanguages,
            rating, repoUrl, websiteUrl, sdgs}:
        {
            name: string,
            description: string,
            license: string,
            programmingLanguages: string[],
            rating: number,
            repoUrl: string,
            websiteUrl: string,
            sdgs: number[],
        }) {
        this.name = name
        this.description = description
        this.license = license
        this.programmingLanguages = programmingLanguages
        this.rating = rating
        this.repoUrl = repoUrl
        this.websiteUrl = websiteUrl
        this.sdgs = sdgs
    }
}
