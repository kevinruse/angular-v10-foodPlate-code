import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FarmersMarket } from '../models/farmers-market';

import { FarmersMarketsService } from '../services/farmers-markets.service';

@Component({
  selector: 'fp-farmers-markets',
  templateUrl: './farmers-markets.component.html',
  styleUrls: ['./farmers-markets.component.css'],
})
export class FarmersMarketsComponent implements OnInit {

  markets: Array<FarmersMarket>;
  isloading = true;
  errorMessage: string;

  @ViewChild('streetInput') streetInputRef: ElementRef;
  @ViewChild('cityInput') cityInputRef: ElementRef;
  @ViewChild('stateInput') stateInputRef: ElementRef;
  @ViewChild('zipInput') zipInputRef: ElementRef;
  @ViewChild('ccInput') ccInputRef: ElementRef;

  constructor(private marketsService: FarmersMarketsService) {
  }

  ngOnInit(): void {
    this.marketsService.getMarkets()
        .subscribe(markets => {
              this.markets = markets;
              console.table(this.markets);
              console.log(this.markets[1].MarketName);
            },
            (error) => {
              this.errorMessage = error.message;
              this.handleError(this.errorMessage);
            },
            () => this.isloading = false);
  }

  handleError(err): void {
    console.log(err);
  }

  showDetails(market): void {
    console.log(market);
    this.streetInputRef.nativeElement.value = market.street;
    this.streetInputRef.nativeElement.disabled = true;
    this.cityInputRef.nativeElement.value = market.city;
    this.cityInputRef.nativeElement.disabled = true;
    this.stateInputRef.nativeElement.value = market.State;
    this.stateInputRef.nativeElement.disabled = true;
    this.zipInputRef.nativeElement.value = market.zip;
    this.zipInputRef.nativeElement.disabled = true;
    this.ccInputRef.nativeElement.checked = market.Credit;
    this.ccInputRef.nativeElement.disabled = true;
  }
}
