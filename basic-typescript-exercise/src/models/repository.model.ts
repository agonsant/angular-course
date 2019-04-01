export interface Owner {
    avatar_url: string
}

export interface Repository{
    id: number,
    name: string,
    description: string
    owner: Owner
}