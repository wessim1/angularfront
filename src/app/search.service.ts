import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ad } from './ad';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private baseURL = "http://localhost:8082/ads"
  constructor( private httpclient: HttpClient ) { }

  searchByPrice(min , max : number): Observable<any[]>{
      return this.httpclient.get<any[]>(`${this.baseURL}/price/${min}/${max}`); 
    
    }
  
  }

