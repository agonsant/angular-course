import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubSearchComponent } from './github-search/github-search.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RepositoryDetailComponent } from './repository-detail/repository-detail.component';

const routes: Routes = [
  {
    path: 'search', component: GithubSearchComponent
  },
  {
    path: 'detail', component: RepositoryDetailComponent
  },
  {
    path: '', redirectTo: '/search', pathMatch: 'full'
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
