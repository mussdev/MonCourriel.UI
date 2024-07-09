import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Recommandation } from '../models/Recommandation';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class RecommandationService {

  baseApiUrl: string = environment.baseApiUrl;
  
  constructor(private http: HttpClient) { }

   // Methode de récuperation des récommandations
   getAllRecommandation(): Observable<Recommandation[]>{
    return this.http.get<Recommandation[]>(this.baseApiUrl + '/api/recommandations');
  }

  // Methode d'insertion des récommandations faites à l'imputation des courriers
  addRecommandation=(data:Recommandation)=>this.http.post(this.baseApiUrl + '/api/recommandations', data);

}
