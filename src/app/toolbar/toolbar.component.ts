import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'], // Ensure SCSS file is included
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
})
export class ToolbarComponent {
  @Output() menuClick = new EventEmitter<void>();
  constructor(private router: Router) {}

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
