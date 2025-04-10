import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { LoginService } from '../../Services/login.service';

@Component({
  selector: 'app-login',
  imports: [
    NgIf,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  storedusername: string = "pippo"
  storedpassword: string = "0000"
  admin:boolean=false;
  name:string="";

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginService,  private router: Router) {

    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })

  }

  ngOnInit(){
    const element: HTMLElement | null = document.getElementById('mainNav');

    if (element) {
      element.style.display = 'block';
    }
    this.loginService.getUsers().subscribe(res => console.log(res))
  }
  onSubmit(): void {
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;

    this.loginService.getUsers().subscribe(users => {
      const accessGranted = users.find(user => user.username === username && user.password === password);

      if (accessGranted) {
        console.log("Access granted to:", accessGranted.username);
        this.admin = true;
        this.name = users.find(user => user.name);
        console.log(this.name);
        localStorage.setItem('admin', JSON.stringify(this.admin));
        localStorage.setItem('name', JSON.stringify(this.name));
        this.router.navigate(['adminZone']);
      } else {
        console.log("Access denied");
        this.admin = false;
      }
    });
  }
}