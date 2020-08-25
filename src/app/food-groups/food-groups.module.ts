import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { testToken } from '../models/test.token';
import { ITest } from '../models/TestInterface';
import { FoodDetailModule } from './food-detail/food-detail.module';

import { FoodGroupsComponent } from './food-groups.component';
import { FoodGroupsRoutingModule } from './food-groups.routing';

export const testValue2: ITest = {
  testString: 'foodGroupsModuleTestValue'
};


@NgModule({
  declarations: [FoodGroupsComponent],
  exports: [
    FoodGroupsComponent
  ],
  imports: [
    CommonModule,
    FoodDetailModule,
    FoodGroupsRoutingModule
  ],
  providers: [{
    provide: testToken, useValue: testValue2
  }]

})
export class FoodGroupsModule { }
