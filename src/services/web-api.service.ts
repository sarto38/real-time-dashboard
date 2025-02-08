import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebApiService {
  private apiUrl = 'https://localhost:7121'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  get(dataUrl: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/api/${dataUrl}`);
  }

  post(dataUrl: string, data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/${dataUrl}`, data);
  }
}
