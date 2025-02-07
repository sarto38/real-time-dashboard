import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { NavigationService } from './navigation.service';
import { Route } from '../routes';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  standalone: true,
  imports: [MatListModule],
})
export class NavigationComponent {
  public Route = Route;
  constructor(private navigationService: NavigationService) {}

  navigateTo(page: string) {
    this.navigationService.navigateTo(page);
  }
}
