import {
  Component,
  EventEmitter,
  Output,
  Inject,
  input,
  Input,
  Signal,
  signal,
  WritableSignal,
  effect,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NavigationService } from '../navigation/navigation.service';

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
  ],
})
export class ToolbarComponent {
  @Input() darkMode: WritableSignal<boolean> = signal(true);
  constructor(private navigationService: NavigationService) {}

  toggleTheme() {
    this.darkMode.set(!this.darkMode());
  }
  navigateHome() {
    this.navigationService.navigateTo('/home');
  }
  @Output() menuClick = new EventEmitter<void>();
}
