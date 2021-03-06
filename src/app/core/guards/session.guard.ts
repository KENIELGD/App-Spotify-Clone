import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {

  constructor(private _cookieSvc: CookieService, private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkCookieSession();
  }

  checkCookieSession():boolean{
    try{
      const token:boolean=this._cookieSvc.check('token');
      if(token){
        return token;
      }
      this.router.navigate(["/","auth"]);
      return false;
    }catch(err){
      console.log(`Ha ocurrido un error [Guard]: ${err}`);
      return false;
    }
  }
  
}
