import { Injectable } from '@angular/core';
import { User } from '../../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: User = new User(1, 'Kevin', 'M', '51+', 'M51+', {},
      {fruitMet:  false, vegMet: false, proteinMet: false, grainMet: false},
      false, 'kevin@kevinruse.com');

  getUser(): User {
    return this.user;
  }




  constructor() { }
}
