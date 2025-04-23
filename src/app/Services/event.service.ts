import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { customCar } from '../../Models/customCar';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private summarySource = new Subject<boolean>();
  private buildSummary = new Subject<customCar>();
  //Aggiunta Subject per admin
  private isAdmin = new Subject<string>();

  summary$ = this.summarySource.asObservable();
  buildSummary$ = this.buildSummary.asObservable();
  //Aggiunto handler
  isAdmin$ = this.isAdmin.asObservable();

  constructor() {
    const saved = localStorage.getItem('showSummary');
    if (saved === 'true') {
      this.summarySource.next(true);
    }
  }

  emitSummary(show: boolean) {
    localStorage.setItem('showSummary', show.toString());
    this.summarySource.next(show);
  }

  setCarbuild(build: customCar) {
    this.buildSummary.next(build);
  }

  //aggiunta funzione
  setAdmin(name: string) {
    this.isAdmin.next(name);
  }

}
