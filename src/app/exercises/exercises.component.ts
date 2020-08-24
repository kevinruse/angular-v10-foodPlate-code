import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';

@Component({
  selector: 'fp-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit {

  constructor(private testService: TestService) { }

  ngOnInit(): void {
    console.log('%cfrom exercises.component:', 'color: red');
    console.log(this.testService.getValue());
  }

}
