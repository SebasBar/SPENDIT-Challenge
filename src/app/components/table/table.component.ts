import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { Paginated, Pagination, Data } from './types/data.interface';
import {
  SelectModeButtonText,
  SelectAllButtonText,
  perPageLength,
} from './types/const';
import { isHtml, isAllElementNotFalse } from 'src/app/utilities/utilities';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, OnChanges {
  @Input() userColumnArray?: Array<string>; // custom column header text
  @Input() paginatedPromise: Promise<Paginated<Data>>;
  @Input() customHtml?: string; // custom HTML header
  @Output() paginatedEvent = new EventEmitter<Pagination>();
  @Output() userRowSelectionEvent = new EventEmitter<Data[]>();

  paginated: Paginated<Data>;
  isHtml = false;
  columnArray: Array<keyof Data>;
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
  optionArrayPerPage = Array.from(
    { length: perPageLength },
    (_, index) => index + 1
  );

  ngOnInit(): void {
    this.isHtml =
      this.customHtml != undefined ? isHtml(this.customHtml) : false;
  }

  async ngOnChanges(changes: SimpleChanges) {
    await changes['paginatedPromise'].currentValue.then(
      (res: Paginated<Data>) => (this.paginated = res)
    );
    this.columnArray = Object.keys(this.paginated.data[0]) as Array<keyof Data>;
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
    // this leaves only user selected rows.
    this.userSelctedRows = this.auxiliaryRows.filter((row) => row != false);

    //checks if all rows are selected and change the button text
    if (isAllElementNotFalse(this.selectedRows)) {
      this.selectAllButtonText = SelectAllButtonText.unselectAll;
    }
    // checks if any checkbox was unselected after using select all button
    if (this.userSelctedRows.length < this.paginated.data.length) {
      this.selectAllButtonText = SelectAllButtonText.selectAll;
    }
    this.userRowSelectionEvent.emit(this.userSelctedRows);
  }

  onSelectAllClick(): void {
    isAllElementNotFalse(this.selectedRows)
      ? this.unselectAllRows()
      : this.selectAllRows();
  }

  toogleSelectMode(): void {
    this.unselectAllRows();
    this.isSelectMode = !this.isSelectMode;
    this.selectModeButtonText = this.isSelectMode
      ? SelectModeButtonText.exitSelectMode
      : SelectModeButtonText.enterSelectMode;
  }

  onPageChange(page: number) {
    // check if onchange page has selected all elements and resets row arrays
    if (isAllElementNotFalse(this.selectedRows)) this.onSelectAllClick();
    this.paginatedEvent.emit({
      page,
      per_page: this.per_page,
    });
  }

  onPageSizeChange(event: Event) {
    this.per_page = parseInt((event.currentTarget as HTMLInputElement).value);
    this.paginatedEvent.emit({
      page: this.page,
      per_page: this.per_page,
    });
    this.unselectAllRows();
  }

  selectAllRows() {
    for (let i = 0; i < this.selectedRows.length; i++) {
      this.selectedRows[i] = true;
      this.auxiliaryRows[i] = this.paginated.data[i];
      this.userSelctedRows[i] = this.paginated.data[i];
    }
    this.selectAllButtonText = SelectAllButtonText.unselectAll;
    this.userRowSelectionEvent.emit(this.userSelctedRows);
  }

  unselectAllRows() {
    for (let i = 0; i < this.selectedRows.length; i++) {
      this.selectedRows[i] = false;
      this.auxiliaryRows[i] = false;
    }
    this.userSelctedRows = [];
    this.selectAllButtonText = SelectAllButtonText.selectAll;
    this.userRowSelectionEvent.emit(this.userSelctedRows);
  }
}
