import { Component, Input, OnInit } from '@angular/core';
import { Data, Paginated } from './types/data.interface';
import { isHtml, isAllElementNotFalse } from 'src/app/utilities/utilities';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() userColumnArray?: Array<string>;
  @Input() paginated: Paginated<Data>;
  @Input() customHtml?: string;

  isHtml = false;
  columnArray: Array<keyof Data>;
  selectMode = false;
  selectedRows: any[] = [];
  auxiliaryRows: any[] = [];
  userSelctedRows: any[] = [];
  toogleButtonText = this.selectMode ? 'Exit Select Mode' : 'Enter Select Mode';

  ngOnInit(): void {
    this.isHtml =
      this.customHtml != undefined ? isHtml(this.customHtml) : false;
    this.columnArray = Object.keys(this.paginated.data[0]) as Array<keyof Data>;
    this.selectedRows = Array(this.paginated.data.length).fill(false);
    this.auxiliaryRows = Array(this.paginated.data.length).fill(false);
  }

  onCheckboxChange(i: number) {
    if (this.selectedRows[i]) {
      this.auxiliaryRows[i] = this.paginated.data[i];
    } else {
      this.auxiliaryRows[i] = false;
    }
    this.userSelctedRows = this.auxiliaryRows.filter((row) => row != false);
    console.log('this.userSelctedRows', this.userSelctedRows);
  }

  onSelectAll() {
    if (isAllElementNotFalse(this.selectedRows)) {
      for (let i = 0; i < this.selectedRows.length; i++) {
        this.selectedRows[i] = false;
        this.auxiliaryRows[i] = false;
      }
      this.userSelctedRows = [];
    } else {
      for (let i = 0; i < this.selectedRows.length; i++) {
        this.selectedRows[i] = true;
        this.auxiliaryRows[i] = this.paginated.data[i];
        this.userSelctedRows[i] = this.paginated.data[i];
      }
    }
    console.log('this.selectedRows', this.selectedRows);
    console.log('this.userSelctedRows', this.userSelctedRows);
  }

  toogleSelectMode() {
    this.selectMode = !this.selectMode;
  }

  toogleSelectionRow(row: Data) {
    console.log('row', row);
  }
}
