import { Component, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('searchInput') searchInput: ElementRef;
  resultList: Array<any>;

  constructor(private http: HttpClient) {

  }

  searchGithub() {
    this.http.get(`https://api.github.com/search/repositories?q=${this.searchInput.nativeElement.value}`)
    .subscribe((res: any) => {
      this.resultList = res.items;
    });
  }

}
