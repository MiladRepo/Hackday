import { Site, link, site } from "./types";

export const getSitesByQ = (query: string) => {
    return fetch(`http://localhost:5162/api/searches?query=${query}`, { method: 'GET' }).then(x => x.json());
}

export const getSites = () => {
    return fetch(`http://localhost:5162/api/searches`, { method: 'GET' }).then(x => x.json());
}

export const getSiteById = (id: number) => {
    return fetch(`http://localhost:5162/api/searches/${id}`, { method: 'GET' }).then(x => x.json());
}

export const addSite = (newSite: site) => {
    fetch(`http://localhost:5162/api/searches`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(newSite)
    })
}

export const addLink = (id?: number, newLink?: link) => {
    fetch(`http://localhost:5162/api/searches/${id}/link`,
        {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(newLink)
        }
    )
}

export const delSite = (id: number) => {
    return fetch(`http://localhost:5162/api/searches/${id}`,
        {
            method: 'DELETE',
        }
    ).then(x => x.json());
}

export const delLink = (id: number) => {
    return fetch(`http://localhost:5162/api/searches/${id}/link`,
        {
            method: 'DELETE',
        }).then(x => x.json());
}