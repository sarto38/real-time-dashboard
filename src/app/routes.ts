import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
];

export enum Route {
  Home = 'home',
  Dashboard = 'dashboard',
  Settings = 'settings',
}
