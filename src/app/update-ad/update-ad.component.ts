import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ad } from '../ad';
import { AdService } from '../ad.service';
import { RealEstates } from '../real-estates';
import { Realstate } from '../realstate';
import { RealstateService } from '../realstate.service';
import { Type } from '../Type';

@Component({
  selector: 'app-update-ad',
  templateUrl: './update-ad.component.html',
  styleUrls: ['./update-ad.component.css']
})
export class UpdateAdComponent implements OnInit {

  id : number;
  realstate : RealEstates  ;
  type:Type
  ad1 : Ad
  selected;
  constructor( private adService : RealstateService , private route : ActivatedRoute , private router : Router) {

  //  this.ad= new Ad();
   }
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
    this.id = this.route.snapshot.params['id'];
    this.adService.getAdById((this.id)).subscribe(data => {
      this.realstate = data;
    }, error => console.log(error))

  }


  updaterestate() {
    alert(this.realstate);
    this.adService.updateAd(this.id,this.realstate).subscribe(data => {
      console.log(data);
     // this.ad = new Ad ();
    
     // this.router.navigate(["ads"]);
      
    }, error => console.log(error));
  }
    onsubmit()
    {

      
      this.adService.updateAd(this.id , this.realstate).subscribe(data =>{

       this.goToAdList();
      })
    };

    goToAdList(){
      this.router.navigate(['/ads']);
  
      
    }
}
