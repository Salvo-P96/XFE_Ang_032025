import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../../Services/event.service';
import { Subscription } from 'rxjs';
import { CommonModule,NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [NgIf,
            CommonModule
           ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  showSummary:boolean=false
  private preventive: Subscription = new Subscription;

  constructor(private eventService: EventService,private router: Router) {}
  
  ngOnInit() {
    this.preventive = this.eventService.summary$.subscribe((show: boolean) => {
      this.showSummary = show;
    });
  } 

  ngOnDestroy() {
    if (this.preventive) {
      this.preventive.unsubscribe();
    }
  }

  goTo(r:string):void {
      this.router.navigate([r])
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