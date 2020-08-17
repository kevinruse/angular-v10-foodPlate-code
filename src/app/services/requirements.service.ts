import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Requirement } from '../models/requirement';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class RequirementsService {
  private requirementsUrl: string = 'assets/server/requirements.json';

  constructor(private http: HttpClient) {
  }

  getRequirements(): Observable<Requirement[]>{
    return this.http.get<Requirement[]>(this.requirementsUrl);
  }

}
