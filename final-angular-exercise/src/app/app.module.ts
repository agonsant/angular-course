import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GithubSearchModule } from './github-search/github-search.module';
import { NotFoundModule } from './not-found/not-found.module';
import { RepositoryDetailModule } from './repository-detail/repository-detail.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    GithubSearchModule,
    NotFoundModule,
    RepositoryDetailModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
