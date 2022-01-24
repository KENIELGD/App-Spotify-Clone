import { Component, OnInit } from '@angular/core';
import { SearchService } from '@modules/history/services/search.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-historypage',
  templateUrl: './historypage.component.html',
  styleUrls: ['./historypage.component.css']
})
export class HistorypageComponent implements OnInit {
  listResults$!:Observable<any>;

  constructor(private _searchSvc:SearchService) { }

  ngOnInit(): void {}

  receiveData(event:string):void{
    this.listResults$=this._searchSvc.searchTracks$(event);
  }
}
