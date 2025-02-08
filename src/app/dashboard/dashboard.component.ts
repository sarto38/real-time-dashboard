import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule, JsonPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, JsonPipe, MatButtonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: true,
})
export class DashboardComponent {
  constructor(private dataService: DataService) {}
  data: any;
  ngOnInit() {}

  getData() {
    this.dataService.getValues().subscribe((data) => {
      this.data = data;
      console.log(data);
    });
  }
}
