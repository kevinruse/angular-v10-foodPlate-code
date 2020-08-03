import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodGroupsComponent } from './food-groups.component';


@NgModule({
  declarations: [FoodGroupsComponent],
  exports: [
    FoodGroupsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FoodGroupsModule { }
