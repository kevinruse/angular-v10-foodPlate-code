import { Injectable } from '@angular/core';

import { User } from '../../models/User';

@Injectable({
  providedIn: 'root'
})

export class UserStatusService {
  registered: boolean;
  user: User;

  getRegisterStatus(currentUser): void {
    if (currentUser.registered === true) {
      console.log(`User Registered is: ${currentUser.registered}`);
    }
  }

  getUserStatus(currentUser): void {
    console.table(currentUser);
  }

  constructor() { }
}
