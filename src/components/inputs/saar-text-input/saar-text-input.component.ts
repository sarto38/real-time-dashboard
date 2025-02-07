import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import {
  ReactiveFormsModule,
  FormControl,
  Validators,
  ValidatorFn,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'saar-text-input',
  templateUrl: './saar-text-input.component.html',
  styleUrls: ['./saar-text-input.component.scss'],
  standalone: true,
  imports: [CommonModule, MatInputModule, ReactiveFormsModule],
})
export class SaarTextInputComponent implements OnChanges {
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Input() type: 'text' | 'password' = 'text';
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() minLength: number | null = null;
  @Input() maxLength: number | null = null;
  @Input() customValidators: {
    validatorFn: ValidatorFn;
    errorId: string;
    errorMessage: string;
  }[] = [];
  @Input() tooltip?: string = undefined;
  @Output() valueChange = new EventEmitter<string>();

  control: FormControl;

  constructor() {
    this.control = new FormControl(this.value, this.getValidators());
    this.control.valueChanges.subscribe((value) => this.onInputChange(value));
  }

  ngOnChanges(changes: any) {
    if (changes.value) {
      this.control.setValue(this.value, { emitEvent: false });
    }
    this.control.setValidators(this.getValidators());
    this.control.updateValueAndValidity();
  }

  getValidators() {
    const validators = [];
    if (this.required) {
      validators.push(Validators.required);
    }
    if (this.minLength !== null) {
      validators.push(Validators.minLength(this.minLength));
    }
    if (this.maxLength !== null) {
      validators.push(Validators.maxLength(this.maxLength));
    }
    if (this.customValidators) {
      this.customValidators.forEach((customValidator) => {
        validators.push(customValidator.validatorFn);
      });
    }
    return validators;
  }

  getErrorMessage() {
    if (this.control.hasError('required')) {
      return 'This field is required';
    }
    if (this.control.hasError('minlength')) {
      return `Minimum length is ${this.minLength}`;
    }
    if (this.control.hasError('maxlength')) {
      return `Maximum length is ${this.maxLength}`;
    }
    for (const validator of this.customValidators) {
      if (this.control.hasError(validator.errorId)) {
        return validator.errorMessage;
      }
    }
    return null;
  }

  onInputChange(value: string): void {
    this.valueChange.emit(value);
  }
}
