import { Component, OnInit } from '@angular/core';
import { GithubSearchService } from '../services/github-search.service';
import { Router } from '@angular/router';
import { GithubRepository } from '../models/github.model';

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.css']
})
export class GithubSearchComponent implements OnInit {

  resultList: Array<GithubRepository>;

  constructor(
    private githubService: GithubSearchService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  searchGithub(query) {
    this.githubService.searchRepositories(query).subscribe((res: any) => {
      this.resultList = res.items as Array<GithubRepository>;
    });
  }

  showDetail(item) {
    this.githubService.setSelectedItem(item);
    this.router.navigate(['/detail']);
  }

}
