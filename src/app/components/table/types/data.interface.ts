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

export type Data = Record<string, any>;
