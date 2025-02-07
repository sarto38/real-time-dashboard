import { Component } from '@angular/core';
import { ValidatorFn, Validators } from '@angular/forms';
import { SaarTextInputComponent } from '../../components/inputs/saar-text-input/saar-text-input.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  imports: [SaarTextInputComponent],
  standalone: true,
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  username: string = '';
  email: string = '';
  password: string = '';

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
