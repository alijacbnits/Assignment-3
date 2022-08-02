import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private routes: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): 
    boolean{
      if(localStorage.getItem('username') != null) {
        // console.log('logged');
        return true;
      }

      else {
        this.routes.navigate(['/login']);
        // console.log('not logged');
        return false;
      }
  }
  
}
