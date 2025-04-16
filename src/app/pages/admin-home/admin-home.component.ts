import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { CarBuildService } from '../../Services/car-build.service';

@Component({
  selector: 'app-admin-home',
  imports: [NgIf,
            NgFor,
            FormsModule
   ],
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {
  userName: string = '';
  insertedPrice: string = '';
  isListEmpty:boolean=true;
  isReviewed:boolean=false;
  isShown:boolean= false;
  summaryList:any[]=[];
  renderer: any;
  div: any;

  constructor(private carBuildService: CarBuildService){}

  ngOnInit(): void {
    this.summaryList = this.carBuildService.getBuilds();
    const user = JSON.parse(localStorage.getItem('name') || '{}');
    if (user) {
      this.userName = user;
    } else {
      this.userName = 'Utente';
    }

      if(this.summaryList.length==0){
        this.isListEmpty=true
      } else {
        this.isListEmpty=false
        
      }
  }

selectedSum:any=null;

  clear(){
    this.carBuildService.clearBuilds()
    this.summaryList=[]
    this.isListEmpty=true;
    console.log(this.summaryList)
  }

  show(build:any){
    this.isShown=true;
    this.selectedSum=build
  }
  close(){
    this.isShown=false;
    this.selectedSum=null
  }
  confirm(){
    if (this.insertedPrice.trim() !== '') {
      this.selectedSum.price = this.insertedPrice;
      this.isReviewed = true;
  
      localStorage.setItem('carBuilds', JSON.stringify(this.summaryList));
  
      console.log('Prezzo inserito:', this.insertedPrice);
      this.insertedPrice = '';
      this.close();
    } else {
      alert('Inserisci un prezzo prima di confermare.');
    }
  }

  cancel(build: any){
    const index = this.summaryList.indexOf(this.selectedSum);
  if (index !== -1) {
    this.carBuildService.removeBuild(index);
    this.summaryList.splice(index, 1);
    this.selectedSum = null;
    this.isShown = false;
    this.isListEmpty = this.summaryList.length === 0;
  }
  }
}