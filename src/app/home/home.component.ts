import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userForm!: FormGroup;
  listData: any;

  
  constructor(private routes: Router) {
    this.listData = [];

    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      address: new FormControl('', [Validators.required]),
      contactNo: new FormControl('', [Validators.required, Validators.pattern(new RegExp("^((\\+91-?)|0)?[0-9]{10}$"))]),
    })
   }


   addItem() {
      this.listData.push(this.userForm.value);
      localStorage.setItem('userlist', JSON.stringify(this.userForm.value))
      this.userForm.reset();
   }

   resetItem() {
      this.userForm.reset();
   }

   get name() {
    return this.userForm.get('name')
   }

   get email() {
    return this.userForm.get('email')
   }

   get address() {
    return this.userForm.get('address')
   }

   get contactNo() {
    return this.userForm.get('contactNo')
   }

  //  removeItem(data: any) {
  //     this.listData.forEach((value:any, index:any) => {
  //       if(value == data)
  //       this.listData.splice(index, 1);
  //     });
  //  }
   removeItem(data: any) {
     this.listData = this.listData.filter((value: any, index: number)=>{
      if(value == data){
        return;
      }
      return value;
     })
   }
  ngOnInit(): void {
  }

  checkButton() {
    localStorage.removeItem('username');
    this.routes.navigate(['/login']);
  }
}
