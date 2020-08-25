import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExercisesComponent } from './exercises.component';

export const exerciseRoutes: Routes = [{ path: '', component: ExercisesComponent }];

@NgModule({
    imports: [RouterModule.forChild(exerciseRoutes)],
    exports: [RouterModule]
})
export class ExerciseRoutingModule { }
