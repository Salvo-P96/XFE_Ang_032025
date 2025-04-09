import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }


  //Per poter recuperare il file locale ho dovuto modificare il file angular.json alle righe 29 e 90
  //in modo da rendere disponibile la cartella assets per le chiamate http
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>('assets/database/users.json');
  }
}
