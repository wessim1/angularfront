import { Component, OnInit } from '@angular/core';
import { Ad } from './ad';
import { AdService } from './ad.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public ads: Ad[];
  public editead: Ad;
  public deletead: Ad;
  
  constructor(private adService: AdService) { }
  
  ngOnInit() {}

  

 

// public searchAds(key: string): void {
//   console.log(key);
//   const results: Ad[] = [];
//   for (const ad of this.ads) {
//     if (ad.type.toLowerCase().indexOf(key.toLowerCase()) !== -1
//     || ad.Realestates.category.toLowerCase().indexOf(key.toLowerCase()) !== -1
//     || ad.Realestates.City.toLowerCase().indexOf(key.toLowerCase()) !== -1
//     || ad.Realestates.Price !== -1) {
//       results.push(ad);
//     }
//   }
//   this.ads = results;
//   if (results.length === 0 || !key) {
//     this.getAds();
//   }
}

   
  
  

