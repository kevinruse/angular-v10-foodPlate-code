import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {FoodGroupsService} from '../services/food-groups.service';
import { TestService } from '../services/test.service';

@Component({
  selector: 'fp-food-groups',
  templateUrl: './food-groups.component.html',
  styleUrls: ['./food-groups.component.css']
})
export class FoodGroupsComponent implements OnInit {

  foodGroups;

  constructor(private foodGroupsSvce: FoodGroupsService,
              private router: Router,
              private testService: TestService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    console.log('%cfrom foodGroups.component:', 'color: red');
    console.log(this.testService.getValue());
    this.foodGroups = this.foodGroupsSvce.getFoodGroups();
  }

  showGroup(group): void {
    this.router.navigate([group.name], {
      relativeTo: this.route, queryParams: {group: `${group.name}`}
    });
  }
}

