import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @Input() resultList: Array<any>;

  @Output() showDetail: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  showDetailEvent(item) {
    this.showDetail.emit(item);
  }

}
