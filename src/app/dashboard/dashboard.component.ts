import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule, JsonPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FootballData } from '../../data/FootballData';
import { SnackbarService } from '../../services/snackbar.service';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { SaarTableComponent } from '../../components/table/saar-table.component';
import { ColDef } from 'ag-grid-enterprise';
import { BlockUI, BlockUIModule, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, MatButtonModule, SaarTableComponent, BlockUIModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: true,
})
export class DashboardComponent {
  constructor(
    private dataService: DataService,
    private snackbarService: SnackbarService
  ) {}
  @BlockUI('block-ui-element') blockUI!: NgBlockUI;

  public footballData?: FootballData = undefined;

  public columnDefs: ColDef[] = [
    { field: 'homeTeam.name' },
    { field: 'awayTeam.name' },
    { field: 'utcDate' },
    {
      field: 'score',
      valueGetter: (params) => {
        if (
          params.data.score.fullTime.home === null ||
          params.data.score.fullTime.away === null
        ) {
          return 'Not played yet';
        }
        return (
          params.data.score.fullTime.home +
          ' - ' +
          params.data.score.fullTime.away
        );
      },
    },
    { field: 'status' },
  ];

  public get rowData() {
    return this.footballData?.matches || [];
  }
  ngOnInit() {}

  getData() {
    this.blockUI.start('Loading...'); // Start blocking
    this.dataService.getValues().subscribe({
      next: (data: FootballData) => {
        this.snackbarService.openSnackBar('Data loaded successfully', 'Close');
        this.footballData = data;
        this.blockUI.stop(); // Stop blocking
        console.log(data);
      },
      error: (error) => {
        this.snackbarService.openSnackBarFromComponent(
          SnackbarComponent,
          {
            message: 'Error loading data',
            action: 'Close',
            color: 'red',
          },
          100000000
        );
      },
    });
  }
}
