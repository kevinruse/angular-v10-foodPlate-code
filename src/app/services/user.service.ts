import { Injectable, Optional } from '@angular/core';

import { User } from '../../models/User';
import { UserStatusService } from './user-status.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: User = new User(1, 'Kevin', 'M', '51+', 'M51+', {},
      {fruitMet:  true, vegMet: false, proteinMet: true, grainMet: false},
      false, 'kevin@kevinruse.com');

  getUser(): User {
    return this.user;
  }

  constructor(@Optional() private userStatusService: UserStatusService) {
    if (this.userStatusService) {
      this.userStatusService.getUserStatus(this.user);
    }
  }

}
