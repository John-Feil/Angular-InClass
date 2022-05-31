import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstApp';

  student = [

    {
      "id": 1,
      "name": "John",
      "description": "Year-Up Student",
      "isHealthy": true,
      "inStock": 3,
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
      "inStock": 0,
      "price": 7.99,
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
      "price": 8.99,
      "image": "assets/profile-img3.jpg",
      "featured": false,
      "qty": 0
    }
  ]

  totalInventory(){

    let sum = 0;

    for(let i of this.student){
        sum += i.inStock;
    }

    return sum;

  }

  increaseQTY(student: any){
    if (student.qty < student.inStock){
      student.qty++;
    }
  }

  decreaseQTY(student: any){
    if (student.qty > 0){
      student.qty--;
    }
  }

}
