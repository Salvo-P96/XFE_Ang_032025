import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EventService } from '../../Services/event.service';
import { Subscription } from 'rxjs';
import { CommonModule,NgIf } from '@angular/common';
import { CustomBuildComponent } from '../custom-build/custom-build.component';
import { customCar } from '../../../Models/customCar';
@Component({
  selector: 'app-summary',
  imports: [NgIf,
            CommonModule
           ],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent {

  carBuild :customCar = new customCar
  private subscription!: Subscription;
  displayHU:string="No";
  autopilot:string="No";

  constructor(private router: Router, private route: ActivatedRoute, private eventService: EventService){}

  ngOnInit(): void {
    const element: HTMLElement | null = document.getElementById('mainNav');

    if (element) {
      element.style.display = 'block';
    }
      this.carBuild= JSON.parse(sessionStorage.getItem("carBuild")!);



  }
}

