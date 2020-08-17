import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private foodUrl: string = 'http://localhost:3004/foodItems';

  constructor(private http: HttpClient) { }

  loadFood() {
    return this.http.get(this.foodUrl);
  }

}
