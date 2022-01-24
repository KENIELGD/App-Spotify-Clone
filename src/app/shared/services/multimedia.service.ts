import { EventEmitter, Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  callback:EventEmitter<any>=new EventEmitter<any>();

  audio!:HTMLAudioElement;
  trackInfo$:BehaviorSubject<any>=new BehaviorSubject(undefined);
  timeElapsed$:BehaviorSubject<any>=new BehaviorSubject('00:00');
  timeRemaining$:BehaviorSubject<any>=new BehaviorSubject('-00:00');
  playerStatus$:BehaviorSubject<any>=new BehaviorSubject('');
  playerPercentage$:BehaviorSubject<number>=new BehaviorSubject(0);


  constructor() {
    this.audio=new Audio();
    this.trackInfo$.subscribe(res=>{
      if(res){
        this.setAudio(res);
      }
    })

    this.listenAllEvents();
  }

  //Reproducir la cancion
  setAudio(track:TrackModel):void{
    this.audio.src=track.url;
    this.audio.play();
  }

  //La barra de progreso de la canción
  listenAllEvents():void{
    this.audio.addEventListener("timeupdate", this.calculateTime, false);
    this.audio.addEventListener("playing", this.setPlayerStatus$, false);
    this.audio.addEventListener("play", this.setPlayerStatus$, false);
    this.audio.addEventListener("pause", this.setPlayerStatus$, false);
    this.audio.addEventListener("ended", this.setPlayerStatus$, false);
  }

  //Tiempo transcurrido
  calculateTime=()=>{
    // console.log('Disparando el evento');
    const {duration, currentTime}=this.audio;
    // console.table([duration, currentTime]);
    this.setTimeElapsed$(currentTime);
    this.setTimeRemaining$(currentTime, duration);
    this.setPercentage$(currentTime, duration);
  }

  //Ajustar el tiempo inicio
  setTimeElapsed$(currentTime:number):void{
    let seconds=Math.floor(currentTime%60);
    let minutes=Math.floor(currentTime/60)%60;

    const displaySeconds=(seconds<10)?`0${seconds}`:seconds;
    const displayMinutes=(minutes<10)?`0${minutes}`:minutes;

    const displayFormat=`${displayMinutes}:${displaySeconds}`;
    this.timeElapsed$.next(displayFormat);
  }

  //Ajustar el tiempo fin
  setTimeRemaining$(currentTime:number, duration:number):void{
    let timeLeft=duration-currentTime;

    let seconds=Math.floor(timeLeft%60);
    let minutes=Math.floor(timeLeft/60)%60;

    const displaySeconds=(seconds<10)?`0${seconds}`:seconds;
    const displayMinutes=(minutes<10)?`0${minutes}`:minutes;

    const displayFormat=`-${displayMinutes}:${displaySeconds}`;
    this.timeRemaining$.next(displayFormat);
  }

  //Reproduciendose la canción 
  setPlayerStatus$=(state:any)=>{
    switch(state.type){
      case 'play':
        this.playerStatus$.next('play');
        break;
      case 'playing':
        this.playerStatus$.next('playing');
        break;
      case 'ended':
        this.playerStatus$.next('ended');
        break;
      default:
        this.playerStatus$.next('paused');
        break;
    }
  }

  togglePlayer():void{
    (this.audio.paused)?(this.audio.play()):(this.audio.pause())
  }

  //Barra de porcentaje
  setPercentage$(currentTime:number, duration:number):void{
    let percentage=(currentTime*100)/duration;
    this.playerPercentage$.next(percentage);
  }

  seekAudio(percentage:number):void{
    const {duration}=this.audio;
    const percentageToSecond=(percentage*duration)/100;
    this.audio.currentTime=percentageToSecond;  
  }
}