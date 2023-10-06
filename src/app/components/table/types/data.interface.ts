export interface Data {
  id: number;
  first_name: string;
  last_name: string;
  age: number;
  full_name: string;
}

export interface Paginated<T> {
  data: Array<T>;
  total?: number;
  skip?: number;
  take?: number;
}

export enum SelectModeButtonText {
  enterSelectMode = 'Enter Select Mode',
  exitSelectMode = 'Exit Select Mode',
}

export enum SelectAllButtonText {
  selectAll = 'Select All',
  unselectAll = 'Unselect All',
}
