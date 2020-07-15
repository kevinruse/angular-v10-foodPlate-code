import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [ AppComponent,
                  HeaderComponent,
                  FooterComponent ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
