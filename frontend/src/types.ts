export type Site = {
    id: number,
    name: string,
    location: string,
    description: string,
    links: {
        id: number,
        name: string,
        location: string
    }[]
}[]

export type site = {
    name?: string,
    location?: string,
    description?: string
}

export type link = {
    name?: string,
    location?: string
}

export type OneSite = {
    name: string,
    links: {
        id: number,
        name: string,
        location: string
    }[]
}
