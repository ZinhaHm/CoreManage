import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Carte {
  id?: number;
  nom: string;
  telephone: string;
  matricule: string;
}
@Injectable({
  providedIn: 'root'
})
export class CarteService {
  private apiUrl = 'http://localhost:8080/api/cartes';  // URL of json-server or API
  constructor(private http: HttpClient) {}
  // Method to fetch cartes
  getCartes(): Observable<Carte[]> {
    return this.http.get<Carte[]>(this.apiUrl);
  }
  //methode to add carte
  addCarte( carte:Carte):Observable<Carte>{
    return this.http.post<Carte>(this.apiUrl, carte);
  }

  //methode to delete carte
  deleteCarte(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

   // Update a user
   updateCarte(id:number,carte:Carte): Observable<Carte> {
    return this.http.put<Carte>(`${this.apiUrl}/${carte.id}`, carte);
  }
}