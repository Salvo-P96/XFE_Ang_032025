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
  private subscriptions: Subscription[] = [];

  constructor(
    private eventService: EventService,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit() {
    let preventive = this.eventService.summary$.subscribe((show: boolean) => {
      this.showSummary = show;
    });
    //Aggiunta subscription per intercettare l'evento
    let admin= this.eventService.isAdmin$.subscribe(name =>{
      this.isAdmin = name != null;
    })
    this.subscriptions.push(preventive);
    this.subscriptions.push(admin);
    const user = this.loginService.getLoggedUser();
    this.isAdmin = !!user?.username;
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub =>{
      sub.unsubscribe();
    })
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
