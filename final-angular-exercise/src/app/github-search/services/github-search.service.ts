import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubSearchService {

  constructor(private http: HttpClient) { }

  searchRepositories(query) {
    return this.http.get(`https://api.github.com/search/repositories?q=${query}`);
  }
}
