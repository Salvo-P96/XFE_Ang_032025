import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../../Services/event.service';
import { Subscription } from 'rxjs';
import { CommonModule, NgIf } from '@angular/common';
import { LoginService } from '../../Services/login.service';

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

  constructor(
    private eventService: EventService,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit() {
    this.preventive = this.eventService.summary$.subscribe((show: boolean) => {
      this.showSummary = show;
    });

    const user = this.loginService.getLoggedUser();
    this.isAdmin = !!user?.username;
  }

  ngOnDestroy() {
    this.preventive.unsubscribe();
  }

  goTo(route: string): void {
    this.router.navigate([route]);
  }

  logOut(): void {
    this.loginService.logout();
    this.isAdmin = false;
    this.router.navigate(['']);
  }
}
