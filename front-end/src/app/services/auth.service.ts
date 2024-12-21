import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/auth';

  
  constructor(private http: HttpClient) { }
  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user,);
    localStorage.setItem('user', JSON.stringify(user));
  }
  login(user: { email: string; password: string }): Observable<any> {
    localStorage.removeItem('user');
    return this.http.post(`${this.apiUrl}/login`, user);
  }
}
