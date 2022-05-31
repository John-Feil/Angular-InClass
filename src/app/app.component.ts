import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Year-Up Students';
  priceOfCart: number = 0;
  itemsInCart: number = 0;
  _nameFilter: string = "";

  filteredStudent: any[] = [];

  student = [

    {
      "id": 1,
      "name": "John",
      "description": "Year-Up Student",
      "isHealthy": true,
      "inStock": 7,
      "price": 5.99,
      "image":"assets/profile-img.jpg",
      "featured": false,
      "qty": 0
    },

    {
      "id": 2,
      "name": "Kyle",
      "description": "Year-Up Student",
      "isHealthy": true,
      "inStock": 3,
      "price": 11.99,
      "image": "assets/profile-img2.jpg",
      "featured": true,
      "qty": 0
    },

    {
      "id": 3,
      "name": "Luis",
      "description": "Year-Up Student",
      "isHealthy": true,
      "inStock": 1,
      "price": 18.99,
      "image": "assets/profile-img3.jpg",
      "featured": false,
      "qty": 0
    }
  ]

  set nameFilter(value: string) {
    this._nameFilter = value;
    console.log('In setter', value); 
    this.filteredStudent = this.performFilter(value);
}

  performFilter(filterBy: string): any[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.student.filter((student: any) =>
    student.name.toLocaleLowerCase().includes(filterBy));
  }


  increaseQTY(student: any) : void{
    if (student.qty < student.inStock){
      student.qty++;
    }
    this.totalItemsAndPriceInCart();
  }

  decreaseQTY(student: any) : void{
    if (student.qty > 0){
      student.qty--;
    }
    this.totalItemsAndPriceInCart();
  }

  totalItemsAndPriceInCart() : void{
    let sum = 0;
    let price = 0;
    let tempSum = 0;
    for(let i of this.student) {
      tempSum = 0;
      if (i.qty > 0){
        sum += i.qty;
        tempSum = i.qty;
        price += (tempSum * i.price);
      }
    }
    this.priceOfCart = price;
    this.itemsInCart = sum;
  }

  qtyMinusStock(student: any) : number {
    let sum = student.inStock - student.qty;
    return sum;
  }


  checkValid(student: any) {
    if (student.qty > student.inStock){
      this.error('higher',student);
    }
    if (student.qty < 0) {
      this.error('lower',student);
    }
  }

  error(errmessage: string, student: any) : void {
    let errormessage = `Error, you're inputed value is ${errmessage} than our current stock`
    if (errmessage == 'higher') {
      student.qty = student.inStock;
    }
    if (errmessage == 'lower'){
      student.qty = 0;
    }
    alert(errormessage);
  }

  isEmptyObject(obj: any) {
    return (obj && (Object.keys(obj).length === 0));
  }

}
