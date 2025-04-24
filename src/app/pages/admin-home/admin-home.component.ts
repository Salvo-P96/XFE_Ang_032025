import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { CarBuildService } from '../../Services/car-build.service';
import { LoginService } from '../../Services/login.service';

@Component({
  selector: 'app-admin-home',
  imports: [NgIf, NgFor, FormsModule],
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {
  userName: string = 'Utente';
  insertedPrice: string = '';
  isListEmpty: boolean = true;
  isReviewed: boolean = false;
  isShown: boolean = false;
  isEditing: boolean = false;
  summaryList: any[] = [];
  selectedSum: any = null;

  constructor(
    private carBuildService: CarBuildService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    const user = this.loginService.getLoggedUser();
    if (user && user.name) {
      this.userName = user.name;
    }

    this.carBuildService.getBuilds().subscribe((builds) => {
      this.summaryList = builds;
      this.isListEmpty = builds.length === 0;
    });
  }

  clear() {
    this.summaryList.forEach(build => {
      this.carBuildService.removeBuild(build.id).subscribe();
    });
    this.summaryList = [];
    this.isListEmpty = true;
  }

  show(build: any) {
    this.isShown = true;
    this.selectedSum = { ...build };
    this.isEditing = false;
    this.insertedPrice = this.selectedSum.price || '';
  }

  close() {
    this.isShown = false;
    this.selectedSum = null;
    this.insertedPrice = '';
    this.isEditing = false;
  }

  confirm() {
    if (this.insertedPrice.trim() !== '') {
      this.selectedSum.price = this.insertedPrice;

      this.carBuildService.updateBuild(this.selectedSum).subscribe(() => {
        const index = this.summaryList.findIndex(b => b.id === this.selectedSum.id);
        if (index !== -1) {
          this.summaryList[index] = { ...this.selectedSum };
        }

         this.insertedPrice = '';
        this.isEditing = false;
        this.close();
      });
    } else {
      alert('Inserisci un prezzo prima di confermare.');
    }
  }

  cancel(build: any) {
    this.carBuildService.removeBuild(build.id).subscribe(() => {
      this.summaryList = this.summaryList.filter(b => b.id !== build.id);
      this.isShown = false;
      this.selectedSum = null;
      this.isListEmpty = this.summaryList.length === 0;
    });
  }
}