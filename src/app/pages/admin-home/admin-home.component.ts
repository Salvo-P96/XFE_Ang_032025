import { Component, OnInit } from '@angular/core';
import { isEmpty } from 'rxjs';
import { NgIf, NgFor } from '@angular/common';
import { CarBuildService } from '../../Services/car-build.service';

@Component({
  selector: 'app-admin-home',
  imports: [NgIf,
            NgFor
   ],
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {
  userName: string = '';
  summaryList:any[]=[];
  isListEmpty:boolean=true;
  isReviewed:boolean=false;
  renderer: any;
  div: any;

  constructor(private carBuildService: CarBuildService){}

  ngOnInit(): void {
    this.summaryList = this.carBuildService.getBuilds();
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
  
  saveReview(){
    this.isReviewed=true;
  }

  clear(){
    this.carBuildService.clearBuilds()
  }
}