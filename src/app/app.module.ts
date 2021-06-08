import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PackService } from './pack.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PackComponent } from './pack/pack.component';
import { Router, RouterModule, Routes } from '@angular/router';
import {  ActivatedRoute, ParamMap } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdListComponent } from './ad-list/ad-list.component'; 
import { CreateAdComponent } from './create-ad/create-ad.component';
import { UpdateAdComponent } from './update-ad/update-ad.component';
import { AdDetailsComponent } from './ad-details/ad-details.component';
//import { FavoriteadsComponent } from './favoriteads/favoriteads.component';
import { ManagementadsComponent } from './managementads/managementads.component';
import { CreaterealstateComponent } from './createrealstate/createrealstate.component';
import { FavouriteaddComponent } from './favouriteadd/favouriteadd.component';
import { AuthComponent } from './auth/auth.component';




const appRoutes : Routes= [
  {path:'',redirectTo:'accueil',pathMatch:'full'},
  {path:'accueil',component:HomeComponent},
  {path:'subscription',component:PackComponent},
  {path: 'card-example',component: CardComponent},
  {path: 'ads' , component: AdListComponent},
  {path: 'create-ad' , component: CreateAdComponent},
  {path : 'update-ad/:id' , component: UpdateAdComponent},
  //{path : 'favoriteads' , component: FavoriteadsComponent},
  {path : 'favoriteads' , component: FavouriteaddComponent},
  {path : 'ad-details/:id' , component: AdDetailsComponent},
  {path : 'crstate' , component: CreaterealstateComponent},

  {path : 'create' , component: AuthComponent},
  {path : 'managementads' , component: ManagementadsComponent}  

];


@NgModule({
  declarations: [
    AppComponent,
    PackComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CardComponent,
    AdListComponent,
    CreateAdComponent,
    UpdateAdComponent,
    AdDetailsComponent,
   // FavoriteadsComponent,
    ManagementadsComponent,
   CreaterealstateComponent,
   FavouriteaddComponent,
   AuthComponent
 ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    CommonModule ,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
