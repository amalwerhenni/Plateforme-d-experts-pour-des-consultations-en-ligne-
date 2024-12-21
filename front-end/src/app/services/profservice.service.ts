import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfserviceService {
  private apiUrl = 'http://localhost:8080/users';

  constructor(private http: HttpClient) {}

  // Récupérer le profil d'un utilisateur par ID
  getUserProfile(userId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/profile/${userId}`);
  }

  // Mettre à jour le profil d'un utilisateur
  updateUserProfile(userId: string, updatedData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/profile/${userId}`, updatedData);
  }
}
