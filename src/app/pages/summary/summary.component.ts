import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EventService } from '../../Services/event.service';
import { Subscription } from 'rxjs';
import { CustomBuildComponent } from '../custom-build/custom-build.component';
import { customCar } from '../../../Models/customCar';
@Component({
  selector: 'app-summary',
  imports: [],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent {

  carBuild :customCar

  constructor(private router: Router, private route: ActivatedRoute, private ){}

  

}
