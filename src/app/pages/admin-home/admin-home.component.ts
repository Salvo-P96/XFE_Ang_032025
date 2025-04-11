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
  summaryList:any=[0];
  isListEmpty:boolean=true;
  isReviewed:boolean=false;
  renderer: any;
  div: any;

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('name') || '{}');
    if (user) {
      this.userName = user.name;
    } else {
      this.userName = 'Utente';
    }

      if(this.summaryList.length==0){
        this.isListEmpty=true
      } else {
        this.isListEmpty=false
        
      }
  }
  
  createSummaryList(){
    
  }

}