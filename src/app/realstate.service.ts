import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RealEstates } from './real-estates';

@Injectable({
  providedIn: 'root'
})
export class RealstateService {

  private baseURL = "http://localhost:8082/real"
  constructor( private httpclient: HttpClient ) { }

  getAdsList(): Observable<RealEstates[]>{
    return this.httpclient.get<RealEstates[]>(`${this.baseURL}/get`);
  
  }

  createad( ad : RealEstates) : Observable<object> {
    return this.httpclient.post(`${this.baseURL}/new` , ad);
  }

  getAdById( id : number) : Observable<RealEstates> {
    return this.httpclient.get<RealEstates>(`${this.baseURL}/get/${id}`);

  }

  updateAd(id : number , ad : RealEstates ) : Observable<RealEstates> {
    return this.httpclient.put<RealEstates>(`${this.baseURL}/edit/${id}` , ad);
  }
  deleteAd(id : number) : Observable<object> {
    return this.httpclient.delete(`${this.baseURL}/delete/${id}`);
  }



}
