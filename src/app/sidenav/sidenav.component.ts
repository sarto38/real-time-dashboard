import { Component, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-sidenav',
  imports: [MatSidenavModule, NavigationComponent],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  toggle() {
    this.sidenav.toggle();
  }

}
