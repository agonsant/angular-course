import { Component, OnInit } from '@angular/core';
import { GithubSearchService } from './services/github-search.service';

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.css']
})
export class GithubSearchComponent implements OnInit {

  resultList: Array<any>;

  constructor(private githubService: GithubSearchService) { }

  ngOnInit() {
  }

  searchGithub(query) {
    this.githubService.searchRepositories(query).subscribe((res: any) => {
      this.resultList = res.items;
    });
  }

}
