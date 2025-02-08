import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WebApiService } from './web-api.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private webApiService: WebApiService) {}

  getValues(): Observable<any> {
    return this.webApiService.get('values');
  }
}
