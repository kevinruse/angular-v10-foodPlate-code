import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import {Food} from '../models/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private foodUrl: string = 'http://localhost:3004/foodItems';
  foodRequest = new HttpRequest('GET', this.foodUrl, {reportProgress: true});

  constructor(private http: HttpClient) {
    this.getAllFoods();
  }

  getFoodsProgress(): void {
    this.http.request(this.foodRequest).subscribe(event => {
      const totalBytes = 53370429;
      if (event.type === HttpEventType.DownloadProgress) {
        const percentDone = Math.round(100 * event.loaded / totalBytes);
        console.log(`File is ${percentDone}% downloaded.`);
      } else if (event instanceof HttpResponse) {
        console.log('File is completed downloaded');
      }
    });
  }

  getAllFoods<Food>(): Observable<Food> {
    return this.http.get<Food>(this.foodUrl);
  }

}
