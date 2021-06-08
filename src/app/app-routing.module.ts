import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdDetailsComponent } from './ad-details/ad-details.component';
import { AdListComponent } from './ad-list/ad-list.component';

import { AuthComponent } from './auth/auth.component';
import { CreateAdComponent } from './create-ad/create-ad.component';
import { CreaterealstateComponent } from './createrealstate/createrealstate.component';
import { FavouriteaddComponent } from './favouriteadd/favouriteadd.component';
//import { FavoriteadsComponent } from './favoriteads/favoriteads.component';
import { ManagementadsComponent } from './managementads/managementads.component';
import { UpdateAdComponent } from './update-ad/update-ad.component';


const routes: Routes = [
{path : 'ads' , component: AdListComponent},
{path : 'create-ad' , component: CreateAdComponent},
{path : 'create' , component: AuthComponent},
{path : 'update-ad/:id' , component: UpdateAdComponent},
{path : 'favoriteads' , component: FavouriteaddComponent},
{path : 'ad-details/:id' , component: AdDetailsComponent},
{path : 'crstate' , component: CreaterealstateComponent},
{path : 'managementads' , component: ManagementadsComponent} 

  
 


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

