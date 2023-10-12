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
