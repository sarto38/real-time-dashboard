import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string, duration: number = 3000): void {
    this.snackBar.open(message, action, {
      duration: duration,
    });
  }

  openSnackBarFromComponent(
    component: any,
    snackbarConfig: SnackbarConfig,
    duration: number = 3000
  ): void {
    this.snackBar.openFromComponent(component, {
      data: snackbarConfig,
      duration: duration,
    });
  }
}

export interface SnackbarConfig {
  message: string;
  action: string;
  color: string;
}
