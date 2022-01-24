import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class InjectsessionInterceptor implements HttpInterceptor {

  constructor(private _cookieSvc: CookieService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    try{
      let newRequest=request;
      let token=this._cookieSvc.get('token'); // true or false
      newRequest=request.clone({
        setHeaders:{
          authorization:`Bearer ${token}`
        }
      })
      return next.handle(newRequest);
    }catch(err){
      console.log(`Ha ocurrido un error [Interceptor]: ${err}`);
      return next.handle(request)
    }
  }
}
