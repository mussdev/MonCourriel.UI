import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Direction } from '../models/Direction';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DirectionService {

  baseApiUrl: string = environment.baseApiUrl;
  
  constructor(private http: HttpClient) { }

  // Methode de récuperation des courriers
  getAllDirection(): Observable<Direction[]>{
    return this.http.get<Direction[]>(this.baseApiUrl + '/api/directions');
  }

  // Rappeler toutes directions et services
  getAllDirectionAndService(): Observable<any[]>{
    return this.http.get<any[]>(this.baseApiUrl + '/api/Directions/all');
  }

  // Methode d'insertion des Services de l'entreprise
  addDirection=(data:Direction)=>this.http.post(this.baseApiUrl + '/api/directions', data);

}
