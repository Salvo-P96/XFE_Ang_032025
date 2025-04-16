import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../../Services/event.service';
import { Subscription } from 'rxjs';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [NgIf, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  showSummary: boolean = false;
  isAdmin: boolean = false;
  private preventive: Subscription = new Subscription();

  constructor(private eventService: EventService, private router: Router) {}

  ngOnInit() {
    this.preventive = this.eventService.summary$.subscribe((show: boolean) => {
      this.showSummary = show;
    });
    this.isAdmin = JSON.parse(localStorage.getItem('admin') || 'false');
    console.log(this.isAdmin)
  }

  ngOnDestroy() {
    if (this.preventive) {
      this.preventive.unsubscribe();
    }
  }

  goTo(r: string): void {
    this.router.navigate([r]);
  }

  logOut(): void {
    localStorage.removeItem('admin');
    localStorage.removeItem('name');
    this.isAdmin = false;
    this.goTo('');
  }

}
