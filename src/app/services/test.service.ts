import { Inject, Injectable } from '@angular/core';
import { testToken } from '../models/test.token';
import { ITest } from '../models/TestInterface';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(@Inject(testToken) private test: ITest ) {
    console.log('%cnew instance of FoodGroupsService created', 'color: red');
  }

  getValue(): ITest {
    return this.test;
  }
}
