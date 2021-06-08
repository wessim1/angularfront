import { Category } from './Category';
import { city } from './city'
export class RealEstates {
  /*constructor(id: number, price: number,Add: string,Area: number,nb_room: number,
    description: string,title: string,City: city,category: Category){
      this.id_real_estates=id;
      this.Price=price;
      this.Adress= Add;
      this.Area =Area;
      this.nb_room= nb_room;
      this.description=description;
      this.title=title;
      this.City=City;
      this.category=category;
    }*/

    id_real_estate: number;
    price: number;
    adress: string;
    area: number;
    nb_room: number;
    description: string;
    title: string;
    city: city;
    category: Category;

    creation_date:Date;




}
