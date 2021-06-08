import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RealEstates } from '../real-estates';
import { RealstateService } from '../realstate.service';

@Component({
  selector: 'app-createrealstate',
  templateUrl: './createrealstate.component.html',
  styleUrls: ['./createrealstate.component.css']
})
export class CreaterealstateComponent implements OnInit {

  constructor(private realstateser : RealstateService ,  private router :  Router) {this.realstate=new  RealEstates(); }


  categories   = [



    "Appartement" ,
    "House" , 
    "Parking_place",
    "Office" ,
    "Commercial_promises",
    "Area" ,
   " Others" 

      
  ]
  ngOnInit(): void {
  }
  selected;
  realstate : RealEstates ;

  save(){

     this.realstateser.createad(this.realstate).subscribe(res=>{
         console.table(res);

         this.router.navigate(["create-ad"]);

         
     })
  }

}
