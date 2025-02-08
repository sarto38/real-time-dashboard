import {
  Component,
  EventEmitter,
  Output,
  Input,
  Signal,
  signal,
  WritableSignal,
  inject,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NavigationService } from '../navigation/navigation.service';
import { Route } from '../routes';
import { AccountService } from '../../services/account.service';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { LoginRegisterDialogComponent } from '../dialogs/login-register-dialog/login-register-dialog.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'], // Ensure SCSS file is included
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    CommonModule,
    MatDialogModule,
  ],
})
export class ToolbarComponent {
  readonly dialog = inject(MatDialog);
  @Input() darkMode: WritableSignal<boolean> = signal(true);
  email: Signal<string | null>;

  constructor(
    private navigationService: NavigationService,
    private accountService: AccountService
  ) {
    this.email = accountService.email;
  }

  toggleTheme() {
    this.darkMode.set(!this.darkMode());
  }

  navigateHome() {
    this.navigationService.navigateTo(Route.Home);
  }

  openLoginRegisterDialog() {
    this.dialog.open(LoginRegisterDialogComponent);
  }

  onLogout() {
    this.accountService.logout();
  }

  @Output() menuClick = new EventEmitter<void>();
}
