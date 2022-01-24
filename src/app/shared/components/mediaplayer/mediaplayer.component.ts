import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mediaplayer',
  templateUrl: './mediaplayer.component.html',
  styleUrls: ['./mediaplayer.component.css']
})
export class MediaplayerComponent implements OnInit, OnDestroy {

  @ViewChild('progressBar') progressBar:ElementRef=new ElementRef('');

  state:string="paused";
  listObservers$:Array<Subscription>=[];

  constructor(public _multimediaSvc:MultimediaService) { }

  ngOnInit(): void {
    const observer1$:Subscription=this._multimediaSvc.playerStatus$.subscribe((status:any)=>{
      this.state=status;
    })

    this.listObservers$=[observer1$];
  }

  handlePosition(event:MouseEvent):void{
    const elNative:HTMLElement=this.progressBar.nativeElement;
    const {clientX}=event;
    const {x, width}=elNative.getBoundingClientRect();
    const clickX=clientX-x;
    const percentegeFromX=(clickX*100)/width;
    this._multimediaSvc.seekAudio(percentegeFromX);
  }

  ngOnDestroy():void{
    this.listObservers$.forEach(u=>u.unsubscribe());
  }
}
