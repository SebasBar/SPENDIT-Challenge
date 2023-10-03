import { Component, Input } from '@angular/core';
import { Data } from './types/data.interface';
import { headerArray, emptyDataArray } from './mocks/data.mock';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() headerArray: Array<keyof Data> = headerArray;
  @Input() dataArray: Data[] = emptyDataArray;
  // headerArray: Array<keyof Data> = headerArray;
  // dataArray: Data[] = dataArray;
}
