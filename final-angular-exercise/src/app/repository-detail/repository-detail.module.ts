import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositoryDetailComponent } from './repository-detail.component';

@NgModule({
  declarations: [
    RepositoryDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RepositoryDetailComponent
  ]
})
export class RepositoryDetailModule { }
