import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'selenium-webdriver';
import { Ad } from '../ad';
import { AdService } from '../ad.service';

@Component({
  selector: 'app-managementads',
  templateUrl: './managementads.component.html',
  styleUrls: ['./managementads.component.css']
})
export class ManagementadsComponent implements OnInit {

  public ads: Ad[];
  public editead: Ad;
  public deletead: Ad;

  constructor(private adService : AdService  , private router : Router) { }

  ngOnInit(): void {
    this.getAds()
  }
  AdDetails(id : number){
    this.router.navigate(['ad-details' , id]);

  }

  private getAds(){
    this.adService.getAdsList().subscribe(data =>{
      this.ads=data;
      console.log(this.ads);
    });
  }

  UpdateAd(id : number){
    this.router.navigate( ['update-ad', id ]);

  }



  deleteAd(id : number){

    this.adService.deleteAd(id).subscribe(data => {
      this.getAds();
      console.log(data)
    })
    console.log(id)
    // this.router.navigate(['managementads'])
    
      
  }

  

}
