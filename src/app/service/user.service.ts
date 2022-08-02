import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  checkCredentials(uname:string, pwd:string) {
    if(uname == 'admin' && pwd == 'admin1234') {
      localStorage.setItem('username', 'admin');
      return true;
    } else {
      return false;
    }
  }
}
