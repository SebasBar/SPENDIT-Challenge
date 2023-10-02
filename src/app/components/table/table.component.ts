import { Component } from '@angular/core';
import { Data } from './types/data.interface';
import { headerArray, dataArray } from './mocks/data.mock';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  headerArray: Array<keyof Data> = headerArray;
  dataArray: Data[] = dataArray;
}
