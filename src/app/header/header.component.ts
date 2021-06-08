import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToAds(ads : string): void {
   this.router.navigate([`${'ads'}`])

  }
  goToFavouriteAds(): void {
    this.router.navigate([`${'favoriteads'}`])

 
   }

   goToManagementAds(ads : string): void {
    this.router.navigate([`${'managementads'}`])
 
   }

}
