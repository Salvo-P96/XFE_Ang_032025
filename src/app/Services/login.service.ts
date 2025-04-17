import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loggedUser: any = null;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>('assets/database/users.json');
  }


  setLoggedUser(user: any): void {
    this.loggedUser = user;
  }


  getLoggedUser(): any {
    return this.loggedUser;
  }


  logout(): void {
    this.loggedUser = null;
  }
}
