import { Component, signal, WritableSignal } from '@angular/core';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule, ValidatorFn, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule, MatTabGroup } from '@angular/material/tabs';
import { AccountService } from '../../../services/account.service';
import { SaarTextInputComponent } from '../../../components/inputs/saar-text-input/saar-text-input.component';
import { SnackbarService } from '../../../services/snackbar.service';

@Component({
  selector: 'app-login-register-dialog',
  templateUrl: './login-register-dialog.component.html',
  styleUrls: ['./login-register-dialog.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatDialogModule,
    SaarTextInputComponent,
  ],
})
export class LoginRegisterDialogComponent {
  password: WritableSignal<string> = signal('');
  email: WritableSignal<string> = signal('');
  currentTabIndex: WritableSignal<number> = signal(0);
  emailValidators: {
    validatorFn: ValidatorFn;
    errorId: string;
    errorMessage: string;
  }[] = [
    {
      validatorFn: Validators.email,
      errorId: 'email',
      errorMessage: 'Please enter a valid email address',
    },
  ];
  constructor(
    public dialogRef: MatDialogRef<LoginRegisterDialogComponent>,
    private snackbarService: SnackbarService,
    private accountService: AccountService
  ) {}

  onRegister() {
    this.accountService.register(this.email(), this.password()).subscribe({
      next: (response) => {
        if (response) {
          this.dialogRef.close();
          // this.router.navigate(['/']);
        }
      },
      error: (error) => {
        this.snackbarService.openSnackBar(error.error, 'Close');
        console.error(error);
      },
    });
  }

  onLogin() {
    this.accountService.login(this.email(), this.password()).subscribe({
      next: (response) => {
        if (response) {
          // this.router.navigate(['/']);
          this.dialogRef.close();
        }
      },
      error: (error) => {
        this.snackbarService.openSnackBar(error.error, 'Close');
        console.error(error);
      },
    });
  }
  onCancel(): void {
    this.dialogRef.close();
  }
  onTabChange(index: number) {
    this.currentTabIndex.set(index);
  }
}
