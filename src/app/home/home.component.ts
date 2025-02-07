import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NavigationService } from '../navigation/navigation.service';
import { Route } from '../routes';

@Component({
  selector: 'app-home',
  imports: [MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
})
export class HomeComponent {
  public Route = Route;
  constructor(private navigationService: NavigationService) {}
  navigateTo(page: string) {
    this.navigationService.navigateTo(page);
  }
}
