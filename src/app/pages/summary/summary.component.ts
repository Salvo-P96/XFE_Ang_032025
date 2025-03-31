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

  constructor(private router: Router, private route: ActivatedRoute, private eventService: EventService){}

  ngOnInit(): void {
    this.subscription = this.eventService.buildSummary$.subscribe(
      (build) => {
        this.carBuild = build;
      }
    );
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}

// import { Component, OnInit, OnDestroy } from '@angular/core';
// import { CarQuotationService } from './car-quotation.service';  // Importa il servizio
// import { Subscription } from 'rxjs';
// import { CarQuotation } from './car-quotation.model';  // Importa il modello

// @Component({
//   selector: 'app-car-summary',
//   templateUrl: './car-summary.component.html',
//   styleUrls: ['./car-summary.component.css']
// })
// export class CarSummaryComponent implements OnInit, OnDestroy {
//   carQuotation: CarQuotation;
//   private subscription: Subscription;

//   constructor(private carQuotationService: CarQuotationService) {}

//   ngOnInit(): void {
//     // Sottoscrivi all'oggetto emesso dal servizio
//     this.subscription = this.carQuotationService.carQuotation$.subscribe(
//       (quotation) => {
//         this.carQuotation = quotation;  // Assegna l'oggetto ricevuto
//       }
//     );
//   }

//   ngOnDestroy() {
//     // Cancella la sottoscrizione per evitare memory leaks
//     if (this.subscription) {
//       this.subscription.unsubscribe();
//     }
//   }
// }