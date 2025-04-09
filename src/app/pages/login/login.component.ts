import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [
    NgIf

  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  storedusername:string="pippo"
  storedpassword:string="0000"

  loginForm:FormGroup;

  constructor(){
    this.loginForm=new FormGroup({
      username: new FormControl(['',Validators.required]),
      password: new FormControl(['',Validators.required]) 
    })

    }


    onSubmit(): void {

      const username = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('password')?.value;
  

      if (username === this.storedusername && password === this.storedpassword) {
        console.log("Access granted to:", username);
      } else {
        console.log("Access denied");
      }
    }
  }