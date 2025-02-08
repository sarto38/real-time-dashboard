import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  WritableSignal,
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
  @Input() value: string | WritableSignal<string> = ''; // by allowing it to be a signal we can use it in a reactive way and not implement onInputChange every time
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

  private get _value(): string {
    return typeof this.value === 'string' ? this.value : this.value();
  }

  private set _value(value: string) {
    if (typeof this.value === 'string') {
      this.value = value;
    } else {
      this.value.set(value);
    }
  }

  constructor() {
    this.control = new FormControl(this.value, this.getValidators());
    this.control.valueChanges.subscribe((value) => this.onInputChange(value));
  }

  ngOnChanges(changes: any) {
    if (changes.value) {
      this.control.setValue(this._value, { emitEvent: false });
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
    this._value = value;
    this.valueChange.emit(value);
  }
}
