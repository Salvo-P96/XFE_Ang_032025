import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../Services/login.service';
import { NgIf } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  admin: boolean = false;
  name: string = "";

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    const element: HTMLElement | null = document.getElementById('mainNav');
    if (element) element.style.display = 'block';
  }

  onSubmit(): void {
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;

    this.loginService.getUserByUsername(username).subscribe(users => {
      const user = users.find(u => u.password === password);

      if (user) {
        console.log("Login OK:", user.username);
        this.admin = true;
        this.name = user.name;
        this.loginService.setLoggedUser(user);
        this.router.navigate(['adminZone']);
      } else {
        console.log("Login fallito");
        this.admin = false;
      }
    });
  }
}
