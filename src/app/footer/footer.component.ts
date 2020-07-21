import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fp-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  versionString: string = '1.0.0';
  icon: string = 'assets/images/icons/icons-29.png';
  logoAlt: string = 'FoodPlate logo';
  isCurrent: boolean = true;
  versionNumber: number = this.versionStringToNumber(this.versionString);

  private versionStringToNumber(version: string): number {
    return Number(parseFloat(version).toFixed(2));
  }

  constructor() { }

  ngOnInit(): void {
  }

}
