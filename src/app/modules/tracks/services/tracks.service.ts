import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators'
import { environment } from 'src/environments/environment';
import { TrackModel } from '@core/models/tracks.model';

@Injectable({
  providedIn: 'root'
})
export class TracksService {

  private readonly urlApi:string=environment.api;
  
  constructor(private http: HttpClient) { }

  skipById(listTrack:TrackModel[], id:number): Promise<TrackModel[]>{
    return new Promise((res, rej)=>{
      const listTmp=listTrack.filter(a=>a._id !== id);
      res(listTmp);
    })
  }

  getAllTracksTrending$():Observable<any>{
    return this.http.get(`${this.urlApi}/tracks`).pipe(map((dataRaw:any)=>dataRaw.data));
  }

  getAllTracksRandom$():Observable<any>{
    return this.http.get(`${this.urlApi}/tracks`).pipe(
      map((dataRaw:any)=>dataRaw.data),
      
      catchError((err)=>{
        console.log(err);
        const { status, statusText } = err;
        console.log(`ERROR ${status}, ${statusText}`);
        return of([]);
      })
    );
  }
}
