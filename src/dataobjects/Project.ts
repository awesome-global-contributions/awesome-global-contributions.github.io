import ProjectJson, { ContributionRequestInformation, LinkInformation } from './ProjectJson'

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
        {
            name, description, license, programmingLanguages,
            rating, repoUrl, websiteUrl, sdgs,
            // generated
            contributionGuidelinesUrl, logoUrl, starsUrl,
            numberContributors,
            // optional
            ratingComment, otherLinks, frameworksUsed,
            licenseUrl, naturalLanguages, naturalLanguagesLink,
        }: ProjectJson) {
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

export interface ProjectsMap {
    1: Project[]
    2: Project[]
    3: Project[]
    4: Project[]
    5: Project[]
    6: Project[]
    7: Project[]
    8: Project[]
    9: Project[]
    10: Project[]
    11: Project[]
    12: Project[]
}

export function getEmptyProjectsMap(): ProjectsMap {
    return {
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
        8: [],
        9: [],
        10: [],
        11: [],
        12: [],
    }
}
