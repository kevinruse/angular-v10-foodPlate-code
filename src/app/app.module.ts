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

@NgModule({
  declarations: [ AppComponent,
                  DefaultComponent,
                  FooterComponent,
                  HeaderComponent,
                  HomeBtnComponent,
                  MainComponent,
                  MessageComponent,
                  NavComponent,
                  PlateComponent,
                  RegisterComponent,
                  FarmersMarketsComponent,
                  ExercisesComponent,
                  TodaysGoalComponent
                  ],
  imports: [
      AppRoutingModule,
      BrowserModule,
      CommonModule,
      FoodGroupsModule,
      FormsModule,
      ReactiveFormsModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
