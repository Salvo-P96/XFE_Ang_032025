import { Component, OnInit } from '@angular/core';
import { isEmpty } from 'rxjs';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-admin-home',
  imports: [NgIf
   ],
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {
  userName: string = '';
  summaryList:any=[5];
  isListEmpty:boolean=true;

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('name') || '{}');
    if (user) {
      this.userName = user.name;
    } else {
      this.userName = 'Utente';
    }
  }
  

  //temporaneo, logica su schermo per ragionare
  populateList():void{
    if(this.summaryList.length==0){
      this.isListEmpty=true
    } else {
      this.isListEmpty=false
    }
  }
}