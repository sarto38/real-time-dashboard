import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], // Updated to use SCSS
  standalone: true,
  imports: [RouterModule, ToolbarComponent, SidenavComponent] 
})
export class AppComponent {
  title = 'real-time-dashboard';

  @ViewChild('sidenav') sidenav!: SidenavComponent;

  toggleSidenav() {
    this.sidenav.toggle();
  }
}
