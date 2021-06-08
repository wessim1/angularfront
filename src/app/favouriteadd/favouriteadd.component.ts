import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Category } from '../Category';
import { city } from '../city';
import { SearchService } from '../search.service';
import { Type } from '../Type';

@Component({
  selector: 'app-favouriteadd',
  templateUrl: './favouriteadd.component.html',
  styleUrls: ['./favouriteadd.component.css']
})
export class FavouriteaddComponent implements OnInit {

  constructor(private http : HttpClient,private search : SearchService ) { }

  ngOnInit(): void {
    this.getfav();
    this.getEstimation();
  }


  url2 = "http://localhost:8082/estimate/get";

 
  estim : any; 
  getEstimation(){
      
        return  this.http.get(this.url2).subscribe(res=>{
              this.estim =res;

              this.estim = new Set(this.estim);
        })
  }

  url ="http://localhost:8082/Favorite_ads/get";
   
  fav : any;

  getfav(){

      return this.http.get(this.url).subscribe(res=>{
        alert(res);
           this.fav =res;
      })
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
      
      this.fav=list;


    }
      )

  }
}
