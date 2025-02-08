import { Component } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  imports: [MatButtonModule, CommonModule],
  standalone: true,
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  loggedIn: boolean = false;

  constructor(private accountService: AccountService) {}

  onUsernameChange(value: string) {
    this.username = value;
  }

  onEmailChange(value: string) {
    this.email = value;
  }

  onPasswordChange(value: string) {
    this.password = value;
  }
}
