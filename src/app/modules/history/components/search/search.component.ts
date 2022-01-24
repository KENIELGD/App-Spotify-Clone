import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  src:string="";
  @Output() callbackData:EventEmitter<any>=new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  callSearch(term:string):void{
    if(term.length>=3){
      console.log('este es el term'+term);
      this.callbackData.emit(term);
    }
  }

}
