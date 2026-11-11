import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Garage{
  id?: number;
  nomg:string;
  ligne:string;
  code:string;
  nvoitures:string; 
  federation:string;
  wilaya:string;
   moughata:string;
    commune:string;
    nomr: string;
    nnir:string;
    telephoner: string;
  
  }
@Injectable({
  providedIn: 'root'
})
export class GarageService {

   
  private apiUrl = 'http://localhost:8080/api/garages';  // URL of json-server or API
  constructor(private http: HttpClient) {}
  // Method to fetch Garage
  getGarage(): Observable<Garage[]> {
    return this.http.get<Garage[]>(this.apiUrl);
  }
  //methode to add Garage
  addGarage( garage:Garage):Observable<Garage>{
    return this.http.post<Garage>(this.apiUrl, garage);
  }

  //methode to delete Garage
  deleteGarage(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

   // Update a Garage
   updateGarage(id:number,garage:Garage): Observable<Garage> {
    return this.http.put<Garage>(`${this.apiUrl}/${garage.id}`, garage);
  }
}
