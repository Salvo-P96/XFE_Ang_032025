import { Component } from '@angular/core';
import { LoginService } from '../../Services/login.service';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- Importa FormsModule per ngModel

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './profile-manager.component.html',
  styleUrl: './profile-manager.component.scss',
})
export class ProfileManagerComponent {
  username: string = '';
  name: string = '';
  confirmation: boolean = false;
  passwordInput: string = '';
  wrongPassword: boolean = false;
  targetField: string = '';
  editing: boolean = false;
  editValue: string = '';

  constructor(private loginService: LoginService) {}

  ngOnInit() {
    const element: HTMLElement | null = document.getElementById('mainNav');
    if (element) element.style.display = 'block';

    const storedUsername = JSON.parse(localStorage.getItem('username') || '""');
    if (storedUsername) {
      this.username = storedUsername;
    }
  }

  openConfirm(field: string) {
    this.confirmation = true;
    this.targetField = field;
    this.passwordInput = '';
    this.wrongPassword = false;
    console.log(field);
  }

  cancel() {
    this.confirmation = false;
    this.passwordInput = '';
    this.wrongPassword = false;
  }

  confirmPassword() {
    this.loginService.getUsers().subscribe((users) => {
      const user = users.find(
        (u) => u.name === this.name && u.password === this.passwordInput
      );

      if (user) {
        console.log(`Access granted to modify: ${this.targetField}`);
        this.confirmation = false;

        this.modifyField(this.targetField);
      } else {
        this.wrongPassword = true;
        console.log('Wrong password');
      }
    });
  }

  modifyField(field: string) {
    this.editing = true;
    this.editValue = this[field];
  }
  saveChange() {
    if (this.targetField && this.editValue.trim() !== '') {
      (this as any)[this.targetField] = this.editValue.trim();
      console.log(`${this.targetField} aggiornato a: ${this.editValue}`);

      this.editing = false;
      this.targetField = '';
      this.editValue = '';
    }
  }
}
