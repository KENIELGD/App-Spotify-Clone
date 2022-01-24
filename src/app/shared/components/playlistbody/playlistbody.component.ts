import { Component, OnInit, Input } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-playlistbody',
  templateUrl: './playlistbody.component.html',
  styleUrls: ['./playlistbody.component.css']
})
export class PlaylistbodyComponent implements OnInit {

  @Input() tracks!:Array<TrackModel>;
  
  optionSort:{
    item:string|null, sort:"asc"|"desc"
  }={item:null, sort:"asc"};

  constructor() { }

  ngOnInit(): void {
  }

  changeSort(item:string){
   this.optionSort={
     item:item,
     sort:this.optionSort.sort==='asc'?'desc':'asc'
   }
  }

}
