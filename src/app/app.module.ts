import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FoodGroupsModule } from './food-groups/food-groups.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeBtnComponent } from './home-btn/home-btn.component';
import { MainComponent } from './main/main.component';
import { MessageComponent } from './message/message.component';
import { PlateComponent } from './plate/plate.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [ AppComponent,
                  FooterComponent,
                  HeaderComponent,
                  HomeBtnComponent,
                  MainComponent,
                  MessageComponent,
                  PlateComponent,
                  NavComponent,
                  ],
  imports: [
    BrowserModule,
    CommonModule,
    FoodGroupsModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
