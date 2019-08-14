export default class SDG {
    public readonly name: string
    public readonly description: string
    public readonly number: number
    public readonly link: string

    constructor({name, description, nr, link}
            : {name: string, description: string, nr: number, link: string}) {
        this.name = name
        this.description = description
        this.number = nr
        this.link = link
    }
}

const rawSdgs = [
    {
        nr: 1,
        name: 'No Poverty',
        description: 'End poverty in all its forms everywhere',
        link: 'https://sustainabledevelopment.un.org/sdg1#targets',
    },
    {
        nr: 2,
        name: 'Zero Hunger',
        description: 'End hunger, achieve food security and improved nutrition and promote' +
            ' sustainable agriculture',
        link: 'https://sustainabledevelopment.un.org/sdg2#targets',
    },
    {
        nr: 3,
        name: 'Good Health and Well-Being',
        description: 'Ensure healthy lives and promote well-being for all at all ages',
        link: 'https://sustainabledevelopment.un.org/sdg3#targets',
    },
    {
        nr: 4,
        name: 'Quality Education',
        description: 'Ensure inclusive and equitable quality education and promote lifelong' +
            ' learning opportunities for all',
        link: 'https://sustainabledevelopment.un.org/sdg4#targets',
    },
    {
        nr: 5,
        name: 'Gender Equality',
        description: 'Achieve gender equality and empower all women and girls',
        link: 'https://sustainabledevelopment.un.org/sdg5#targets',
    },
    {
        nr: 6,
        name: 'Clean Water and Sanitation',
        description: 'Ensure availability and sustainable management of water and sanitation for all',
        link: 'https://sustainabledevelopment.un.org/sdg6#targets',
    },
    {
        nr: 7,
        name: 'Affordable and Clean Energy',
        description: 'Ensure access to affordable, reliable, sustainable and modern energy for all',
        link: 'https://sustainabledevelopment.un.org/sdg7#targets',
    },
    {
        nr: 8,
        name: 'Decent Work and Economic Growth',
        description: 'Promote sustained, inclusive and sustainable economic growth, full and' +
            ' productive employment and decent work for all',
        link: 'https://sustainabledevelopment.un.org/sdg8#targets',
    },
    {
        nr: 9,
        name: 'Industry, Innovation and Infrastructure',
        description: 'Build resilient infrastructure, promote inclusive and sustainable' +
            ' industrialization and foster innovation',
        link: 'https://sustainabledevelopment.un.org/sdg9#targets',
    },
    {
        nr: 10,
        name: 'Reduced Inequalities',
        description: 'Reduce inequality within and among countries',
        link: 'https://sustainabledevelopment.un.org/sdg10#targets',
    },
    {
        nr: 11,
        name: 'Sustainable Cities and Communities',
        description: 'Make cities and human settlements inclusive, safe, resilient and sustainable',
        link: 'https://sustainabledevelopment.un.org/sdg11#targets',
    },
    {
        nr: 12,
        name: 'Responsible Consumption and Production',
        description: 'Ensure sustainable consumption and production patterns',
        link: 'https://sustainabledevelopment.un.org/sdg12#targets',
    },
    {
        nr: 13,
        name: 'Climate Action',
        description: 'Take urgent action to combat climate change and its impacts',
        link: 'https://sustainabledevelopment.un.org/sdg13#targets',
    },
    {
        nr: 14,
        name: 'Life below Water',
        description: 'End poverty in all its forms everywhere Conserve and sustainably use the oceans,' +
            ' seas and marine resources for sustainable development',
        link: 'https://sustainabledevelopment.un.org/sdg14#targets',
    },
    {
        nr: 15,
        name: 'Life on Land',
        description: 'End poverty in all its forms everywhere Protect, restore and promote sustainable' +
            ' use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt' +
            ' and reverse land degradation and halt biodiversity loss',
        link: 'https://sustainabledevelopment.un.org/sdg15#targets',
    },
    {
        nr: 16,
        name: 'Peace, Justice and Strong Institutions',
        description: 'End poverty in all its forms everywhere Promote peaceful and inclusive societies' +
            ' for sustainable development, provide access to justice for all and build effective,' +
            ' accountable and inclusive institutions at all levels',
        link: 'https://sustainabledevelopment.un.org/sdg16#targets',
    },
    {
        nr: 17,
        name: 'Partnerships for the Goals',
        description: 'End poverty in all its forms everywhere Strengthen the means of implementation and' +
            ' revitalize the global partnership for sustainable development',
        link: 'https://sustainabledevelopment.un.org/sdg17#targets',
    },
]

let sdgs: SDG[] | null = null

export function getAllSDGs(): SDG[] {
    if (sdgs === null) {
        sdgs = rawSdgs.map((rawSdg) => new SDG(rawSdg))
    }
    return sdgs
}
