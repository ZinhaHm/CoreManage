import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Taxi{
id?: number;
  nom: string;
  telephone: string;
  matricule: string;
  federation:string;
  garage:string;
  nserie: string;
  wilaya:string;}
@Injectable({
  providedIn: 'root'
})
export class TaxiService {
  
  private apiUrl = 'http://localhost:8080/api/taxis';  // URL of json-server or API
  constructor(private http: HttpClient) {}
  // Method to fetch cartes
  getTaxis(): Observable<Taxi[]> {
    return this.http.get<Taxi[]>(this.apiUrl);
  }
  //methode to add carte
  addTaxi( taxi:Taxi):Observable<Taxi>{
    return this.http.post<Taxi>(this.apiUrl, taxi);
  }

  //methode to delete carte
  deleteTaxi(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

   // Update a user
   updateTaxi(id:number,taxi:Taxi): Observable<Taxi> {
    return this.http.put<Taxi>(`${this.apiUrl}/${taxi.id}`, taxi);
  }
}
