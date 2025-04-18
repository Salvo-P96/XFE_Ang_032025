import { Component } from '@angular/core';
import { LoginService } from '../../Services/login.service';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

    this.userPF = this.loginService.getLoggedUser();
    this.username = this.userPF.username;
    this.name = this.userPF.name;
  }

  openConfirm(field: string) {
    this.confirmation = true;
    this.targetField = field;
    this.passwordInput = '';
    this.wrongPassword = false;
  }

  cancel() {
    this.confirmation = false;
    this.passwordInput = '';
    this.wrongPassword = false;
  }

  confirmPassword() {
    if (this.userPF.password === this.passwordInput) {
      this.confirmation = false;
      this.modifyField(this.targetField);
    } else {
      this.wrongPassword = true;
    }
  }

  modifyField(field: string) {
    this.editing = true;
    this.editValue = this.userPF[field];
  }

  saveChange() {
    if (this.targetField && this.editValue.trim() !== '') {
      this.userPF[this.targetField] = this.editValue.trim();

      this.loginService.updateUser(this.userPF).subscribe(updated => {
        console.log(`${this.targetField} aggiornato a: ${this.editValue}`);
        this.loginService.setLoggedUser(updated);
        this.username = updated.username;
        this.name = updated.name;

        this.editing = false;
        this.targetField = '';
        this.editValue = '';
      });
    }
  }
}
