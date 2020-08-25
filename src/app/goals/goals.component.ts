import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Goal } from '../models/goal';
import { GoalsService } from '../services/goals.service';

@Component({
  selector: 'fp-goals',
  templateUrl: 'goals.component.html',
  styleUrls: ['goals.component.css']
})

export class GoalsComponent implements OnInit {
  goalForm: FormGroup;
  allGoals;
  errorMessage: string;
  isLoading: boolean;
  goal: Goal;

  createForm(): void {
    this.goalForm = this.fb.group({
      id: [''],
      goalTitle: ['', Validators.required],
      deadline: ['', Validators.required],
      didIt: ['']
    });
  }

  constructor(private fb: FormBuilder,
              private goalsService: GoalsService) {
    this.createForm();
  }

  ngOnInit(): void {
    this.goalsService.getGoals()
        .subscribe((res: any) => {
          this.allGoals = res;
          console.log(this.allGoals);
          this.isLoading = false;
        }, err => {
          this.errorMessage = err;
          console.log(this.errorMessage = err.message);
          this.isLoading = false;
        });
  }
}
