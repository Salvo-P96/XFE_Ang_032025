import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { customCar } from '../../Models/customCar';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private summarySource = new Subject<boolean>();
  private buildSummary = new Subject<customCar>

  summary$ = this.summarySource.asObservable();
  buildSummary$ = this.buildSummary.asObservable();

  emitSummary(show: boolean) {
    this.summarySource.next(show);
  }

  setCarbuild(build:customCar){
    this.buildSummary.next(build)
  }



  constructor() { }
}
