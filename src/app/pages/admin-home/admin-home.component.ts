import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {
  userName: string = '';


  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('name') || '{}');
    if (user) {
      this.userName = user.name;
    } else {
      this.userName = 'Utente';
    }
  }
}