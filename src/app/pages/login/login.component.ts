import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  storedusername: string = "pippo"
  storedpassword: string = "0000"

  loginForm: FormGroup;

  //Aggiungere il FormBuilder nel costruttore ed utilizzarlo per creare il FormGroup
  constructor(private fb: FormBuilder) {
    //La funzione group() del FormBuilder è più indicata rispetto ad istanziare un nuovo FormGroup
    // in modo da non dover instanziare anche i FormControl.
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
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