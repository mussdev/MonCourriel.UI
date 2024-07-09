import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Courrier } from '../models/Courrier';
import { Observable } from 'rxjs';
import { Guid } from 'guid-typescript';


@Injectable({
  providedIn: 'root'
})
export class CourriersService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  // Methode de récuperation des courriers
  getAllCourriers(): Observable<Courrier[]>{
    return this.http.get<Courrier[]>(this.baseApiUrl + '/api/courriers');
  }

  // Methode d'insertion des courriers
  addCourriers(formData: FormData): Promise<void> {
    return this.http.post<void>(`${this.baseApiUrl}` + '/api/courriers', formData).toPromise();
  }

  updateCourrier(id: Guid, updateCourrierResquest: Courrier): Observable<Courrier>{
    return this.http.put<Courrier>(this.baseApiUrl + '/api/courriers/' + id, updateCourrierResquest);
  }

  // Recuperer un courrier
  getCourrier(id: string ): Observable<Courrier> {
    return this.http.get<Courrier>(this.baseApiUrl + '/api/courriers/' + id)
  }

  
}
