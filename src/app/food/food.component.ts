import { Component, OnInit } from '@angular/core';
import { Food } from '../models/food';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'fp-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  isLoading: boolean = true;
  errorMessage: string;
  foodList: Food[];


  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.getFood();
    // console.log(this.foodService.getFoodsProgress());
    /*this.foodService.loadFood()
        .subscribe(data => console.log(data));*/
  }

  getFood(): void {
    this.foodService.getAllFoods<Food[]>()
        .subscribe(
            (food) => {
              this.foodList = food;
            },
            (error) => {
              this.errorMessage = error.message;
              this.handleError(this.errorMessage);
            },
            () => this.isLoading = false
        );
  }

  handleError(err): void {
    console.log(err);
  }


}
