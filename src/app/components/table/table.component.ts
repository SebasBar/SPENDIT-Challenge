import { Component, Input, OnInit } from '@angular/core';
import { Data, Paginated } from './types/data.interface';
import { isHtml } from 'src/app/utilities/utilities';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() userHeaderArray?: Array<string>;
  @Input() dataArray: Paginated<Data>;
  @Input() customHtml?: string;
  isHtml = false;
  columnArray: Array<keyof Data>;

  ngOnInit(): void {
    this.isHtml =
      this.customHtml != undefined ? isHtml(this.customHtml) : false;
    this.columnArray = Object.keys(this.dataArray.data[0]) as Array<keyof Data>;
  }

  // getKeysOfData(dataArray: Paginated<Data>): string[] {
  //   return Object.keys(dataArray.data[0])
  // }
}
