import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';

@Component({
  selector: 'app-cardplayer',
  templateUrl: './cardplayer.component.html',
  styleUrls: ['./cardplayer.component.css']
})
export class CardplayerComponent implements OnInit {

  @Input() mode!:"small"|"big";
  @Input() track!:TrackModel;

  constructor(private _multimediaSvc: MultimediaService) { }

  ngOnInit(): void {
  }

  sendPlay(track:TrackModel):void{
    this._multimediaSvc.trackInfo$.next(track);
  }
}
