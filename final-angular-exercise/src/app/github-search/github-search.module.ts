import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubSearchComponent } from './github-search.component';
import { SearchComponent } from './components/search/search.component';
import { ResultComponent } from './components/result/result.component';

@NgModule({
  declarations: [
    GithubSearchComponent,
    SearchComponent,
    ResultComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    GithubSearchComponent
  ]
})
export class GithubSearchModule { }
