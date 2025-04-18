import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAdminSubject = new BehaviorSubject<boolean>(this.getInitialAdminState());
  isAdmin$ = this.isAdminSubject.asObservable();

  private getInitialAdminState(): boolean {
    return JSON.parse(localStorage.getItem('admin') || 'false');
  }

  setAdmin(isAdmin: boolean): void {
    this.isAdminSubject.next(isAdmin);
    localStorage.setItem('admin', JSON.stringify(isAdmin));
  }

  clearAdmin(): void {
    this.isAdminSubject.next(false);
    localStorage.removeItem('admin');
    localStorage.removeItem('name');
  }
}
