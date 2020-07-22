import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { HomeBtnComponent } from './home-btn/home-btn.component';

@NgModule({
  declarations: [ AppComponent,
                  HeaderComponent,
                  FooterComponent,
                  MainComponent,
                  HomeBtnComponent ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
