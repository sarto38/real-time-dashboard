import { Component, effect, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { WritableSignal, signal } from '@angular/core';
import {
  AllEnterpriseModule,
  LicenseManager,
  ModuleRegistry,
} from 'ag-grid-enterprise';

ModuleRegistry.registerModules([AllEnterpriseModule]);
LicenseManager.setLicenseKey(
  '[TRIAL]_this_{AG_Charts_and_AG_Grid}_Enterprise_key_{AG-076337}_is_granted_for_evaluation_only___Use_in_production_is_not_permitted___Please_report_misuse_to_legal@ag-grid.com___For_help_with_purchasing_a_production_key_please_contact_info@ag-grid.com___You_are_granted_a_{Single_Application}_Developer_License_for_one_application_only___All_Front-End_JavaScript_developers_working_on_the_application_would_need_to_be_licensed___This_key_will_deactivate_on_{14 March 2025}____[v3]_[0102]_MTc0MTkxMDQwMDAwMA==f7c8723db6b2e4c55a843f86bf24e52d'
);

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
    body.dataset['agThemeMode'] = darkMode ? 'dark-blue' : 'light-blue';
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
