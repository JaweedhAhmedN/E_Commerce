import { Injectable } from '@angular/core';
import { Env } from '../../../env/env';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private categorListUrl = `${Env.productApiUrl}/category-list`;

  constructor(private http: HttpClient) {}

  getCategoryList(): Observable<any[]> {
    return this.http.get<any[]>(this.categorListUrl);
  }
}
