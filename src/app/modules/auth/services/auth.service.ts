import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly urlApi=environment.api;

  constructor(private http: HttpClient, private _cookieSvc: CookieService) { }

  sendCredentials(email:string, password:string):Observable<any>{

    const body={
      email:email,
      password:password
    };

    return this.http.post(`${this.urlApi}/auth/login`, body)
                    .pipe(
                      tap((res:any)=>{
                        console.log(res);
                        const {tokenSession}=res;
                        this._cookieSvc.set('token', tokenSession, 1, "/")
                      })
                    )
  }
}
