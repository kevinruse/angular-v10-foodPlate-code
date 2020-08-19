import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { FoodGroupsModule } from './food-groups/food-groups.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeBtnComponent } from './home-btn/home-btn.component';
import { MainComponent } from './main/main.component';
import { MessageComponent } from './message/message.component';
import { PlateComponent } from './plate/plate.component';
import { NavComponent } from './nav/nav.component';
import { DefaultComponent } from './components/default/default.component';
import { RegisterComponent } from './register/register.component';
import { FarmersMarketsComponent } from './farmers-markets/farmers-markets.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { TodaysGoalComponent } from './todays-goal/todays-goal.component';
import { FoodComponent } from './food/food.component';
import { NutritionDetailsComponent } from './nutrition-details/nutrition-details.component';

@NgModule({
  declarations: [ AppComponent,
                  DefaultComponent,
                  ExercisesComponent,
                  FarmersMarketsComponent,
                  FoodComponent,
                  FooterComponent,
                  HeaderComponent,
                  HomeBtnComponent,
                  MainComponent,
                  MessageComponent,
                  NavComponent,
                  PlateComponent,
                  RegisterComponent,
                  TodaysGoalComponent,
                  NutritionDetailsComponent
                  ],
  imports: [
      AppRoutingModule,
      BrowserModule,
      CommonModule,
      FormsModule,
      HttpClientModule,
      ReactiveFormsModule,
      ScrollingModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
