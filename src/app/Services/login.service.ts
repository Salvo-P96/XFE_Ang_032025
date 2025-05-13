import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventService } from './event.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient, private eventService: EventService) {}

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getUserByUsername(username: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?username=${username}`);
  }

  updateUser(user: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${user.id}`, user);
  }

  setLoggedUser(user: any): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getLoggedUser(): any {
    if(localStorage.getItem('user') != null){
      this.eventService.setAdmin(JSON.parse(localStorage.getItem('user')!).name);
      return JSON.parse(localStorage.getItem('user')!);
    }else{
      '{}'
    }
  }

  logout(): void {
    localStorage.removeItem('user');
  }
}
