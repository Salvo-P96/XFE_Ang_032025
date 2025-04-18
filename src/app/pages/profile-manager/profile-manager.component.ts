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
  userPF: any;

  constructor(private loginService: LoginService) {}

  ngOnInit() {
    const element: HTMLElement | null = document.getElementById('mainNav');
    if (element) element.style.display = 'block';

    this.userPF = JSON.parse(localStorage.getItem('user') || '{}');
    console.log('user: ', this.userPF);

    this.username = this.userPF.username;
    this.name = this.userPF.name;
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
    if (this.userPF.password === this.passwordInput) {
      console.log('Valori di input:', this.userPF.password, this.passwordInput);
      console.log(`Access granted to modify: ${this.targetField}`);
      this.confirmation = false;
      this.modifyField(this.targetField);
    } else {
      this.wrongPassword = true;
      console.log('Wrong password');
    }
  }

  modifyField(field: string) {
    this.editing = true;
    this.editValue = field;
  }
  saveChange() {
    if (this.targetField && this.editValue.trim() !== '') {
      (this as any)[this.targetField] = this.editValue.trim();

      this.userPF[this.targetField] = this.editValue.trim();

      localStorage.setItem('user', JSON.stringify(this.userPF));

      console.log(`${this.targetField} aggiornato a: ${this.editValue}`);

      this.editing = false;
      this.targetField = '';
      this.editValue = '';
    }
  }
}
