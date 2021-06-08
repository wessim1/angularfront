import { HttpClient } from '@angular/common/http';
import { Component, OnInit,  } from '@angular/core';
import { Router } from '@angular/router';
import { Ad } from '../ad'
import { AdService } from '../ad.service';
import { Category } from '../Category';
import { city } from '../city';
import { RealEstates } from '../real-estates';
import { Realstate } from '../realstate';
import { RealstateService } from '../realstate.service';
import { Type } from '../Type' ;

@Component({
  selector: 'app-create-ad',
  templateUrl: './create-ad.component.html',
  styleUrls: ['./create-ad.component.css']
})
export class CreateAdComponent implements OnInit {


   


  private selectedFile2;
  // imgURL: any;
   imageUrl2: any;

  ad : Ad 
  category : Category;
  type : Type;
  city : city ; 
  r : RealEstates[];
  selected :RealEstates ;
  
  constructor(private adService : AdService,private realstateser : RealstateService , private router : Router,private http :HttpClient ) {  this.ad = new Ad(); 
  this.selected=new RealEstates();
  
  this.r=[];
  }

  public onFileChanged2(event) {
    console.log(event);
    this.selectedFile2 = event.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imageUrl2 = reader.result;
    };

  }

  selectChangeHandler (event: any) {
    //update the ui
    this.selected = event.target.value;
  }

  ngOnInit(): void {
    this.getAllrealstate();
    
  }


  getAllrealstate(){
       this.realstateser.getAdsList().subscribe((res=>{
    
alert(res);
           this.r  = res;
            
       }))
  }
  
  saveAd() {


  
    const uploadData = new FormData();
    uploadData.append('imageFile', this.selectedFile2, this.selectedFile2.name);


    this.http.post('http://localhost:8082/ads/upload', uploadData, { observe: 'response' })
    .subscribe((response) => {
      console.log(response);

      if (response.status === 200) {

          
    this.adService.createad(this.ad) .subscribe( data =>{
      console.log(data);
      alert(this.ad);
      this.goToAdList();

    },
    error => console.log(error));
      
        console.log('Image uploaded successfully');
        this.router.navigate(['ads']);
      } else {
        console.log('Image not uploaded successfully');
      }
    }
    );


    
  }
  goToAdList(){
    this.router.navigate(['/ads']);

  }
  onsubmit() {
    console.log(this.ad);
  }
}
