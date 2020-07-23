import { AfterViewInit, Component, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { HeaderComponent } from './header/header.component';
import { User } from '../models/User';
import { UserService } from './services/user.service';

@Component({
  selector: 'fp-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent  implements OnInit, AfterViewInit {
  @ViewChild('fpHeader') headerComponent: HeaderComponent;
  @Input()
  user: User;

  constructor(private userService: UserService,
              private titleService: Title) {
  }

  ngOnInit(): void {
    this.titleService.setTitle('Welcome to FoodPlate!');
    this.user = this.userService.getUser();
  }

  ngAfterViewInit(): void {
    console.log(`messageString: ${this.headerComponent.getMessageString()}`);
  }

}
