import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FarmersMarket } from '../models/farmers-market';


@Injectable({
  providedIn: 'root'
})
export class FarmersMarketsService {

  private marketsUrl: string = 'http://localhost:3006/markets';

  constructor(private http: HttpClient) {
  }

  getMarkets(): Observable<FarmersMarket[]> {
    return this.http.get<FarmersMarket[]>(this.marketsUrl);
  }

}
