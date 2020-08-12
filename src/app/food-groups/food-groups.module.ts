import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodDetailModule } from './food-detail/food-detail.module';

import { FoodGroupsComponent } from './food-groups.component';


@NgModule({
  declarations: [FoodGroupsComponent],
  exports: [
    FoodGroupsComponent
  ],
  imports: [
    CommonModule,
    FoodDetailModule
  ]
})
export class FoodGroupsModule { }
