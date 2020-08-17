import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fp-nutrition-details',
  templateUrl: './nutrition-details.component.html',
  styleUrls: ['./nutrition-details.component.css']
})
export class NutritionDetailsComponent implements OnInit {

  @Input()
  foodItem;

  constructor() { }

  ngOnInit(): void {
    console.log(this.foodItem);
  }

}
