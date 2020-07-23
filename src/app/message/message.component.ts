import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'fp-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit, AfterViewInit {

  @ViewChild('firstnameElement') firstnameElementRef: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.firstnameElementRef.nativeElement.style.backgroundColor = 'lightblue';
    console.log(this.firstnameElementRef);
  }

}
