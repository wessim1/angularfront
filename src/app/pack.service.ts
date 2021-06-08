import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Pack } from './pack';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PackService {
  pack:Pack;
  id_pack:number;
private apiServerUrl=environment.apiBaseUrl;
  constructor(private http:HttpClient) { }
  public getPacks(): Observable<any>{
    return this.http.get<Pack[]>(`${this.apiServerUrl}/all`);
  }
  public addPack(pack:Pack): Observable<Pack>{
    return this.http.post<Pack>(`${this.apiServerUrl}/add`, pack);
  }
  public updatePack(pack:Pack): Observable<Pack>{
    return this.http.put<Pack>(`${this.apiServerUrl}/put`, pack);
  }
  public deletePack( packId:number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/supprimerPack/${packId}` );
  }
 
  // Send an email to a customer
 
  public getPackById(id_pack){
    return this.http.get(`${this.apiServerUrl}/all`+id_pack);
  }
  exportPdf():Observable<Blob>{
return this.http.get(`${this.apiServerUrl}/download-pdf`,{responseType:'blob'});
  }
}
