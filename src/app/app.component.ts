import { Component, effect, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { WritableSignal, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], // Updated to use SCSS
  standalone: true,
  imports: [RouterModule, ToolbarComponent, SidenavComponent],
})
export class AppComponent {
  title = 'real-time-dashboard';
  darkMode: WritableSignal<boolean> = signal(true); // The dark mode is set to true by default.
  constructor() {
    // Will call the changeTheme method when the darkMode signal changes.
    effect(() => {
      this.changeTheme(this.darkMode());
    });
  }

  @ViewChild('sidenav') sidenav!: SidenavComponent;

  toggleSidenav() {
    this.sidenav.toggle();
  }

  // The dark mode is toggled by clicking the theme button in the toolbar.
  changeTheme(darkMode: boolean) {
    const body = document.body;
    if (darkMode) {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
    } else {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
    }
  }

  // Not in use, helped in testing the signal
  toggleTheme() {
    const body = document.body;
    if (body.classList.contains('dark-theme')) {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
    } else {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
    }
    this.darkMode.set(!this.darkMode());
  }
}
