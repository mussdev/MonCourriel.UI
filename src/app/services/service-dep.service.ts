import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from '../models/Service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { Direction } from '../models/Direction';

@Injectable({
  providedIn: 'root'
})
export class ServiceDepService {

  baseApiUrl: string = environment.baseApiUrl;
  
  constructor(private http: HttpClient) { }

   // Methode de récuperation des services
   getAllService(): Observable<Service[]>{
    return this.http.get<Service[]>(this.baseApiUrl + '/api/services');
  }

  // Methode d'insertion des Services de l'entreprise
 // addService=(data:Service)=>this.http.post(this.baseApiUrl + '/api/service', data);
 addService(data: Service):Observable<any>{
  return this.http.post<any>(this.baseApiUrl + '/api/services', data)
 }

}
