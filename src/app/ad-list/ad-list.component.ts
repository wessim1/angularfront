import { Component, OnInit } from '@angular/core';
import { RealEstates} from '../real-estates'
import { city } from '../city'
import { Category } from '../Category'

import { Type } from '../Type';
import { AdService } from '../ad.service';
import { Router } from '@angular/router';
import { AdDetailsComponent } from '../ad-details/ad-details.component';
import { SearchService } from '../search.service';
import { Ad } from '../ad';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
//import { FavoriteadsComponent } from '../favoriteads/favoriteads.component';
@Component({
  selector: 'app-ad-list',
  templateUrl: './ad-list.component.html',
  styleUrls: ['./ad-list.component.css']
})
export class AdListComponent implements OnInit {

 

 

  public ads: Ad[];
  //public favoirteads: FavoriteadsComponent;
  public editead: Ad;
  public deletead: Ad;
  min : number =0 ;
  max : number =999999 ;
  category : Category;
  type : Type;
  city : city ; 
  
  
  categories   = [



    "Appartement" ,
    "House" , 
    "Parking_place",
    "Office" ,
    "Commercial_promises",
    "Area" ,
   " Others" 

      
  ]


  
  constructor( private adService: AdService ,private http : HttpClient, private router : Router , private search : SearchService) { }

  url3 = "http://localhost:8082/Favorite_ads/add/";

  addfav(id){
    return  this.http.post(this.url3+ localStorage.getItem("user") + "/" + id, {}).subscribe(res=>{
       alert("ok");
})
       
  }


  ngOnInit(): void {

    //this.category =new Category();
  
    this.getAds();
    console.log(this.ads);
    }

    private getAds(){
      this.adService.getAdsList().subscribe(data =>{
        this.ads=data;
        console.log(this.ads);
      });
    }
      
     
      AdDetails(id : number){
        this.router.navigate(['ad-details' , id]);

      }

    
      UpdateAd(id : number){
        this.router.navigate( ['update-ad', id ]);

      }

    

      deleteAd(id : number){
        this.adService.deleteAd(id).subscribe( data =>{
          console.log(data);
          this.getAds();
        })
      }

      public onOpenModal(ad: Ad, mode: string): void {
        const container = document.getElementById('main-container');
        const button = document.createElement('button');
        button.type = 'button';
        button.style.display = 'none';
        button.setAttribute('data-toggle', 'modal');
        if (mode === 'add') {
          button.setAttribute('data-target', '#addAdModal');
        }
        if (mode === 'edit') {
          this.editead = ad;
          button.setAttribute('data-target', '#updateAdModal');
        }
        if (mode === 'delete') {
          this.deletead = ad;
          button.setAttribute('data-target', '#deleteAdModal');
        }
        container.appendChild(button);
        button.click();
      }

      searchPrice(min , max : number , category : Category , type : Type , city : city ) {
        this.search.searchByPrice( min , max).subscribe(data =>{
          let list = data;
          console.log(list);
          if (type)
          list = list.filter(d=>d.type==type.toLocaleLowerCase());
          if(category)
          list = list.filter(d=>d.real_estates.category==category);
          if(city) 
          list = list.filter(d=>d.real_estates.city==city);
          
          this.ads=list;


        }
          )

      }

      addToFavAds(){

        
      }
}




