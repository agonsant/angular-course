import { Component, OnInit, Output, ViewChild, ElementRef, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @ViewChild('searchInput') searchInput: ElementRef;

  @Output() search: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  searchGithub() {
    this.search.emit(this.searchInput.nativeElement.value);
  }

}
