import { Injectable } from '@angular/core';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  name:String;
  Users : Users[]=[new Users(1,'salim', 'salim','brahim','123456','salim.brahim@esprit.tn'),
  new Users(1,'yasmine', 'yasmine','yasmine','123','yasmine.njim@esprit.tn'),
  new Users(1,'ameni', 'yasmine','yasmine','123','ameni.souelmia@esprit.tn')];  
constructor(
){
  this.name="";
 
}
public login(u:Users){
  for(var item of this.Users){
      if ((item.email==u.email)&&(item.password==u.password))
      {
          this.name= item.userName;
      console.log("message")};
  }return this.name; }
}
