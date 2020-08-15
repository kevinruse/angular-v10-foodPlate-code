import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/index';

import { TodaysGoalService } from '../services/todays-goal.service';


@Component({
  selector: 'fp-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy {

  goal: any;
  subscription: Subscription;

  versionString: string = '1.0.0';
  icon: string = 'assets/images/icons/icons-29.png';
  logoAlt: string = 'FoodPlate logo';
  isCurrent: boolean = true;
  versionNumber: number = this.versionStringToNumber(this.versionString);

  private versionStringToNumber(version: string): number {
    return Number(parseFloat(version).toFixed(2));
  }

  moreInfo(): void {
    alert('For more information about the Food Plate, visit https://www.choosemyplate.gov/');
  }

  constructor(private todaysGoalSvce: TodaysGoalService) {
    this.subscription = this.todaysGoalSvce.getGoal()
        .subscribe(goal   => {
          this.goal = goal;
        });
  }

  ngOnInit(): void {
  }

  clearGoal(): void {
    this.todaysGoalSvce.clearGoal();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
