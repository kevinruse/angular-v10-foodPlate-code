import { Component, ComponentFactoryResolver, Injector, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
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
  foodGroups: Set<string> = new Set();
  foodListByGroup: Food[] = this.foodList;
  foodItem: Food;
  protein;
  selectedIndex: number;

  @ViewChild('foodDetailContainer', {read: ViewContainerRef})
  foodDetailContainer: ViewContainerRef;


  constructor(private foodService: FoodService,
              private cfr: ComponentFactoryResolver,
              private injector: Injector) {
  }

  ngOnInit(): void {
    this.getFood();
    this.displayFoods('allFoods');
    // console.log(this.foodService.getFoodsProgress());
    /*this.foodService.loadFood()
        .subscribe(data => console.log(data));*/
  }

  select(index: number): void {
    this.selectedIndex = index;
  }

  getFoodGroups(food): void {
    food.forEach(food => {
      const group = food.group;
      this.foodGroups.add(group);
    });
    console.log(this.foodGroups);
  }

  getFood(): void {
    this.foodService.getAllFoods<Food[]>()
        .subscribe(
            (food) => {
              this.foodList = food;
              this.getFoodGroups(this.foodList);
              this.displayFoods('allFoods');
            },
            (error) => {
              this.errorMessage = error.message;
              this.handleError(this.errorMessage);
            },
            () => this.isLoading = false
        );
  }

  displayFoods(group): void {
    if (group === 'allFoods') {
      this.foodListByGroup = this.foodList;
    } else if (group !== 'allFoods') {
      this.foodListByGroup = this.foodList.filter((foods) => {
        return foods.group === group;
      });
    }
  }

  async showNutrients(food): Promise<any> {
    this.protein = food.nutrients[0].value;
    console.log(food.nutrients);
    console.log(this.protein + food.nutrients[0].units);
    this.foodItem = food;
    console.log(this.foodItem);
    this.foodDetailContainer.detach();
    await this.lazyLoadNutritionDetail();
  }


  private async lazyLoadNutritionDetail(): Promise<any> {
    const { NutritionDetailsComponent } = await import('../nutrition-details/nutrition-details.component');
    const nutritionDetailFactory = this.cfr.resolveComponentFactory(NutritionDetailsComponent);
    const { instance } = this.foodDetailContainer.createComponent(nutritionDetailFactory, null, this.injector);
    instance.foodItem = this.foodItem;
  }

  handleError(err): void {
    console.log(err);
  }


}
