import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Tuktuk {
  id?: number;
  nom: string;
  telephone: string;
  matricule: string;
  nserie:string;
  wilaya:string;
  logo:boolean;
}
@Injectable({
  providedIn: 'root'
})
export class TuktukService {

  private apiUrl = 'http://localhost:8080/api/tuktuks';  // URL of json-server or API
  constructor(private http: HttpClient) {}
  // Method to fetch cartes
  getTuktuks(): Observable<Tuktuk[]> {
    return this.http.get<Tuktuk[]>(this.apiUrl);
  }
  //methode to add carte
  addTuktuk( tuktuk:Tuktuk):Observable<Tuktuk>{
    return this.http.post<Tuktuk>(this.apiUrl, tuktuk);
  }

  //methode to delete carte
  deleteTuktuk(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

   // Update a user
   updateTuktuk(id:number,tuktuk:Tuktuk): Observable<Tuktuk> {
    return this.http.put<Tuktuk>(`${this.apiUrl}/${tuktuk.id}`, tuktuk);
  }
}
