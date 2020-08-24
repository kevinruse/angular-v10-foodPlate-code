import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { testToken } from '../models/test.token';
import { ITest } from '../models/TestInterface';

import { ExerciseRoutingModule } from './exercise.routing.module';
import { ExercisesComponent } from './exercises.component';

export const testValue: ITest = {
  testString: 'exercisesModuleTestValue'
};


@NgModule({
  declarations: [ExercisesComponent],
  imports: [
    CommonModule,
    ExerciseRoutingModule
  ],
  providers: [{
    provide: testToken, useValue: testValue
  }]

})
export class ExercisesModule { }
