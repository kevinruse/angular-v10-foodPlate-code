import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'fp-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit, AfterViewInit {

  @ViewChild('firstnameElement') firstnameElementRef: ElementRef;

  @Input()
  user: User;

  groupsMet = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // this.firstnameElementRef.nativeElement.style.backgroundColor = 'lightblue';
    // console.log(this.firstnameElementRef);
  }

  getFoodGroupsMet(): string {
    let messageString = `You have eaten all your `;

    if (this.user.reqsStatus.fruitMet === true) {
      this.groupsMet.push('fruit');
    }
    if (this.user.reqsStatus.vegMet === true) {
      this.groupsMet.push(' vegetables');
    }
    if (this.user.reqsStatus.proteinMet === true) {
      this.groupsMet.push(' protein');
    }
    if (this.user.reqsStatus.grainMet === true) {
      this.groupsMet.push(' grains');
    }
    messageString += this.groupsMet.toString();
    return messageString;
  }
}
