import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GithubRepository } from '../models/github.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubSearchService {

  private selectedItem: GithubRepository;

  constructor(private http: HttpClient) { }

  searchRepositories(query: string): Observable<any> {
    return this.http.get(`https://api.github.com/search/repositories?q=${query}`);
  }

  searchRepoRefs(repoURL: string): Observable<any> {
    return this.http.get(`${repoURL}/heads`);
  }

  setSelectedItem(item: GithubRepository) {
    this.selectedItem = item;
  }

  getSelectedItem(): GithubRepository {
    return this.selectedItem;
  }
}
