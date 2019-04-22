import { Component, OnInit } from '@angular/core';
import { GithubSearchService } from '../services/github-search.service';
import { GithubRepository } from '../models/github.model';

@Component({
  selector: 'app-repository-detail',
  templateUrl: './repository-detail.component.html',
  styleUrls: ['./repository-detail.component.css']
})
export class RepositoryDetailComponent implements OnInit {

  selectedItem: GithubRepository;
  refs: Array<string> = [];

  constructor(
    private githubService: GithubSearchService,
  ) {
  }

  ngOnInit() {
    this.selectedItem = this.githubService.getSelectedItem();
    this.githubService.searchRepoRefs(this.selectedItem.git_refs_url.replace(/{.*}/, '')).subscribe(data => {
      data.forEach(elem => this.refs.push(elem.ref.substring(elem.ref.lastIndexOf('/') + 1)));
    });
  }

}
