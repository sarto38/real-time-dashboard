import { Component, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { NavigationComponent } from '../navigation/navigation.component';
import { NavigationService } from '../navigation/navigation.service';

@Component({
  selector: 'app-sidenav',
  imports: [MatSidenavModule, NavigationComponent],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  constructor(private navigationService: NavigationService) {
    this.navigationService.navigation$.subscribe(() => {
      this.close();
    });
  }
  toggle() {
    this.sidenav.toggle();
  }
  close() {
    this.sidenav.close();
  }
}
