import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ad } from './ad';

@Injectable({
  providedIn: 'root'
})
export class AdService {

  private baseURL = "http://localhost:8082/ads"
  constructor( private httpclient: HttpClient ) { }

  getAdsList(): Observable<Ad[]>{
    return this.httpclient.get<Ad[]>(`${this.baseURL}/get`);
  
  }

  createad( ad : Ad) : Observable<object> {
    return this.httpclient.post(`${this.baseURL}/new` , ad);
  }

  getAdById( id : number) : Observable<Ad> {
    return this.httpclient.get<Ad>(`${this.baseURL}/get/${id}`);

  }

  updateAd(id : number , ad : Ad ) : Observable<Ad> {
    return this.httpclient.put<Ad>(`${this.baseURL}/edit/${id}` , ad);
  }
  deleteAd(id : number) : Observable<object> {
    return this.httpclient.delete(`${this.baseURL}/delete/${id}`);
  }
}
