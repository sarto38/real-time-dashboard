import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { NavigationService } from './navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  standalone: true,
  imports: [MatListModule],
})
export class NavigationComponent {
  constructor(private navigationService: NavigationService) {}

  navigateTo(path: string) {
    this.navigationService.navigateTo(path);
  }
}
