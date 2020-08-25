import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';

import {DefaultComponent} from './components/default/default.component';
import { FarmersMarketsComponent } from './farmers-markets/farmers-markets.component';
import { FoodComponent } from './food/food.component';
import { GoalsComponent } from './goals/goals.component';
import {PlateComponent} from './plate/plate.component';
import {RegisterComponent} from './register/register.component';
import { LeaveRegisterGuardService } from './services/leave-register-guard.service';
import { RegisterGuardService } from './services/register-guard.service';

const fallbackRoute: Route = {
    path: '**',
    component: DefaultComponent
};

const routes: Routes = [
    {
        path: '',
        children: [
            { path: 'myPlate', component: PlateComponent, canActivate: [ RegisterGuardService ] },
            { path: 'register', component: RegisterComponent, canDeactivate: [ LeaveRegisterGuardService] },
            { path: 'farmersMarkets', component: FarmersMarketsComponent },
            { path: 'nutritionInfo', component: FoodComponent },
            { path: 'goals', component: GoalsComponent },
            {path: 'foodGroups', loadChildren: () => import('./food-groups/food-groups.module').then(m => m.FoodGroupsModule)},
            {path: 'exercises', loadChildren: () => import('./exercises/exercises.module').then(m => m.ExercisesModule)},
            fallbackRoute
        ]
    }
];

// @ts-ignore
@NgModule({
    imports: [
        RouterModule.forRoot(
            routes)
    ],
    exports: [
        RouterModule
    ],
    providers: [RegisterGuardService]
})

export class AppRoutingModule { }
