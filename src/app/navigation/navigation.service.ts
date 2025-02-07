import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(private router: Router) {}

  private navigationSubject = new Subject<string>();

  get navigation$() {
    return this.navigationSubject.asObservable();
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
    this.navigationSubject.next(path);
  }
}
