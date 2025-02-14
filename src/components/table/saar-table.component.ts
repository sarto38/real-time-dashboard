import { Component, Input } from '@angular/core';
import { ColDef, colorSchemeDarkBlue, themeQuartz } from 'ag-grid-community';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'saar-table',
  templateUrl: './saar-table.component.html',
  styleUrls: ['./saar-table.component.scss'],
  standalone: true,
  imports: [AgGridAngular],
})
export class SaarTableComponent {
  @Input() rowData: any[] = [];
  @Input() columnDefs: ColDef[] = [];
  myTheme = themeQuartz
    .withParams(
      {
        backgroundColor: '#FFE8E0',
        foregroundColor: '#361008CC',
        browserColorScheme: 'light',
      },
      'light-red'
    )
    .withParams(
      {
        backgroundColor: '#201008',
        foregroundColor: '#FFFFFFCC',
        browserColorScheme: 'dark',
      },
      'dark-red'
    );
}
