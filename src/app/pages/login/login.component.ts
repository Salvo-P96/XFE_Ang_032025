import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { LoginService } from '../../Services/login.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
    
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  storedusername: string = "pippo"
  storedpassword: string = "0000"

  loginForm: FormGroup;
  users:{ username: string, password: string } [] = [];

  constructor(private fb: FormBuilder,private loginService: LoginService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })

  }

  ngOnInit(): void {
    this.loginService.getUsers().subscribe((data: { username: string, password: string }[]) => {
      this.users = data;
    });
  }


  onSubmit(): void {

    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;

    const accessGranted = this.users.find(u => u.username === username && u.password === password);

    if (accessGranted) {
      console.log("Access granted to:", username);
    } else {
      console.log("Access denied");
    }
  }
}