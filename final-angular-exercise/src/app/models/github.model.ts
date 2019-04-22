export interface GithubRepository {
    id: number;
    name: string;
    description: string;
    forks: number;
    open_issues: number;
    watchers: number;
    git_refs_url: string;
    owner: GithubOwner;
}

export interface GithubOwner {
    id: number;
    avatar_url: string;
}
