import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = 'Welcome to FoodPlate!';
  message: string = 'Welcome to your Food Plate';

  getMessageString() {
    return this.message;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
