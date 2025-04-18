import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarBuildService {
  private apiUrl = 'http://localhost:3000/carBuilds';

  constructor(private http: HttpClient) {}

  getBuilds(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  updateBuild(build: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${build.id}`, build);
  }

  removeBuild(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  clearBuilds(): Observable<any> {
    return this.http.get<any[]>(this.apiUrl);
  }
  saveBuild(build: any): Observable<any> {
    return this.http.post('http://localhost:3000/carBuilds', build);
  }
}
