import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {

  constructor(private routes: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): 
      boolean{
        if(localStorage.getItem('username') === null) {
          return true;
        }
  
        else {
          this.routes.navigate(['/home']);
          return false;
        }
  }
  
}
