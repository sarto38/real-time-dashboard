import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from './web-api.service';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  get email(): Signal<string | null> {
    return this._email.asReadonly();
  }
  private _email: WritableSignal<string | null> = signal(null);
  constructor(private webApiService: WebApiService) {
    const email = localStorage.getItem('email');
    if (email) {
      this._email.set(email);
    }
  }

  login(email: string, password: string): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      this.webApiService.post('account/login', { email, password }).subscribe({
        next: (response) => {
          localStorage.setItem('token', response.token);
          localStorage.setItem('email', email);
          this._email.set(email);
          observer.next(true);
          observer.complete();
        },
        error: (error) => {
          observer.error(error);
        },
      });
    });
  }

  register(email: string, password: string): Observable<boolean> {
    return this.webApiService.post('account/register', { email, password });
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    this._email.set(null);
  }
}
