import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:8080/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/`);
  }

  getExperts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/experts`);
  }

  getUserById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  registerUser(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user,);
  }
   // Récupérer le profil d'un expert par ID
    // Récupérer le profil d'un utilisateur
  getUserProfile(userId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/profile/${userId}`);
  }

  // Mettre à jour le profil de l'utilisateur
  updateUserProfile(userId: string, updatedData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/profile/${userId}`, updatedData);
  }
  
}
