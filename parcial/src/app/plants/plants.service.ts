import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Plant } from './plant';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlantsService {

  private apiUrl = environment.baseUrl;

constructor(
  private http: HttpClient
) { }


getPlants(): Observable<Plant[]>{
  return this.http.get<Plant[]>(this.apiUrl);
}
}
