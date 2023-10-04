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
