import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  constructor(private service: UserService, private routes: Router) { }

  msg: string = '';

  ngOnInit(): void {
  }

  check(uname:string, pwd:string) {
    var output = this.service.checkCredentials(uname, pwd);
    if(output === true) {
      this.routes.navigate(['/home']);    
    }
    else {
      this.msg = 'You have entered invalid credentials'   //showing error message for wrong credentials
    }
  }

}
