import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Courrier } from '../models/Courrier';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CourriersService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllCourriers(): Observable<Courrier[]>{
    return this.http.get<Courrier[]>(this.baseApiUrl + '/api/courrier');
  }
}
