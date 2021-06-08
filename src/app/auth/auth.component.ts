import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Users } from '../users';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  message : String ;
  msg:String = "no user";

  user : Users;

  Users : Users[]=[new Users(1,'wessim', 'wessim','Hamami','123456','wessim.hamami@esprit.tn'),
  new Users(1,'yasmine', 'yasmine','yasmine','123','yasmine.njim@esprit.tn'),
  new Users(1,'ameni', 'yasmine','yasmine','123','ameni.souelmia@esprit.tn')];  
  constructor(private service : AuthService , private router : Router) { 
    this.message="";
  }
  ngOnInit(): void {
    
  }
  isLoginMode = true ; 
  onSwitchMode(){
    this.isLoginMode=!this.isLoginMode;
  }
  onSubmit(form : NgForm){
    console.log(form);
    
    this.message=this.service.login(form.value);
    console.log(this.isLoginMode);
    console.log(this.message);
    
    
      if(!this.isLoginMode){
         this.service.Users.push(form.value);
      }else{
         if(this.message!==""){
         
      
          alert("login successfull");



      this.Users.filter((u) =>{
               u.email  == form.value.email
               console.log(u);
               
          });
          localStorage.setItem("user" ,   this.Users[0].user_id.toString() );


          
       
          console.log(this.message);
          this.router.navigate(['']);}
         }
        }

}
