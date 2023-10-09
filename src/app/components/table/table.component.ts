import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import {
  Paginated,
  Pagination,
  SelectModeButtonText,
  SelectAllButtonText,
  BeerData,
} from './types/data.interface';
import { emptyBeerData } from 'src/app/mocks/data.mock';
import { isHtml, isAllElementNotFalse } from 'src/app/utilities/utilities';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent<T> implements OnInit, OnChanges {
  @Input() userColumnArray?: Array<string>;
  @Input() paginated: Paginated<BeerData> = {
    data: emptyBeerData,
    page: 1,
    per_page: 5,
    total_items: 90,
  };
  @Input() customHtml?: string;
  @Output() paginatedEvent = new EventEmitter<Pagination>();

  isHtml = false;
  columnArray: Array<keyof BeerData>;
  isSelectMode = false;
  selectedRows: any[] = [];
  auxiliaryRows: any[] = [];
  userSelctedRows: any[] = [];
  selectModeButtonText: SelectModeButtonText =
    SelectModeButtonText.enterSelectMode;
  selectAllButtonText: SelectAllButtonText = SelectAllButtonText.selectAll;
  page: number;
  per_page: number;
  totalItems: number;
  pagination: Pagination;

  ngOnInit(): void {
    this.isHtml =
      this.customHtml != undefined ? isHtml(this.customHtml) : false;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.paginated = changes['paginated'].currentValue;
    this.columnArray = Object.keys(this.paginated.data[0]) as Array<
      keyof BeerData
    >;
    this.selectedRows = Array(this.paginated.data.length).fill(false);
    this.auxiliaryRows = Array(this.paginated.data.length).fill(false);
    this.page = this.paginated.page;
    this.per_page = this.paginated.per_page;
    this.totalItems = this.paginated.total_items;
  }

  onCheckboxChange(i: number): void {
    if (this.selectedRows[i]) {
      this.auxiliaryRows[i] = this.paginated.data[i];
    } else {
      this.auxiliaryRows[i] = false;
    }
    this.userSelctedRows = this.auxiliaryRows.filter((row) => row != false);

    if (isAllElementNotFalse(this.selectedRows)) {
      this.selectAllButtonText = SelectAllButtonText.unselectAll;
    }
    if (this.userSelctedRows.length < this.paginated.data.length) {
      this.selectAllButtonText = SelectAllButtonText.selectAll;
    }
    console.log('this.userSelctedRows', this.userSelctedRows);
  }

  onSelectAll(): void {
    if (isAllElementNotFalse(this.selectedRows)) {
      for (let i = 0; i < this.selectedRows.length; i++) {
        this.selectedRows[i] = false;
        this.auxiliaryRows[i] = false;
      }
      this.userSelctedRows = [];
      this.selectAllButtonText = SelectAllButtonText.selectAll;
    } else {
      for (let i = 0; i < this.selectedRows.length; i++) {
        this.selectedRows[i] = true;
        this.auxiliaryRows[i] = this.paginated.data[i];
        this.userSelctedRows[i] = this.paginated.data[i];
      }
      this.selectAllButtonText = SelectAllButtonText.unselectAll;
    }
    console.log('this.userSelctedRows', this.userSelctedRows);
  }

  toogleSelectMode(): void {
    this.isSelectMode = !this.isSelectMode;
    this.selectModeButtonText = this.isSelectMode
      ? SelectModeButtonText.exitSelectMode
      : SelectModeButtonText.enterSelectMode;
  }

  gty(page: number) {
    // check if onchange page has selected all elements
    if (isAllElementNotFalse(this.selectedRows)) this.onSelectAll();
    this.paginatedEvent.emit({
      page,
      per_page: this.per_page,
    });
    console.log('page', page);
  }
}
