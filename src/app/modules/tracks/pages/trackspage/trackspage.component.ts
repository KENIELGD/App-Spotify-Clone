import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TracksService } from '@modules/tracks/services/tracks.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-trackspage',
  templateUrl: './trackspage.component.html',
  styleUrls: ['./trackspage.component.css']
})
export class TrackspageComponent implements OnInit, OnDestroy {

  tracksTrending:Array<TrackModel>=[];
  tracksRandom:Array<TrackModel>=[];

  constructor(private _tracksSvc: TracksService) { }

  ngOnInit(): void {
    this._tracksSvc.getAllTracksTrending$().subscribe((res:TrackModel[])=>this.tracksTrending=res);

    this._tracksSvc.getAllTracksRandom$().subscribe(res=>this.tracksRandom=res)
  }

  ngOnDestroy():void{
  }
}
