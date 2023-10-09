// export interface Data {
//   id: number;
//   first_name: string;
//   last_name: string;
//   age: number;
//   full_name: string;
// }

export interface BeerData {
  id: number;
  name: string;
  ibu: number;
  ph: number;
  tagline: string;
}

export interface Paginated<T> {
  data: Array<T>;
  page: number;
  per_page: number;
  total_items: number;
}

export interface Pagination {
  page: number;
  per_page: number;
  take?: number;
}

export enum SelectModeButtonText {
  enterSelectMode = 'Enter Select Mode',
  exitSelectMode = 'Exit Select Mode',
}

export enum SelectAllButtonText {
  selectAll = 'Select All Rows',
  unselectAll = 'Unselect All Rows',
}
