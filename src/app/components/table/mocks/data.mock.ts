import { Data } from '../types/data.interface';

export const headerArray: Array<keyof Data> = [
  'id',
  'first_name',
  'last_name',
  'age',
  'full_name',
];

export const emptyDataArray: Data[] = [
  {
    id: 0,
    first_name: '',
    last_name: '',
    age: 0,
    full_name: '',
  },
];

export const dataArray: Data[] = [
  {
    id: 1,
    first_name: 'John',
    last_name: 'Snow',
    age: 35,
    full_name: 'John Snow',
  },
  {
    id: 2,
    first_name: 'John',
    last_name: 'Snow',
    age: 35,
    full_name: 'John Snow',
  },
  {
    id: 3,
    first_name: 'John',
    last_name: 'Snow',
    age: 35,
    full_name: 'John Snow',
  },
  {
    id: 4,
    first_name: 'John',
    last_name: 'Snow',
    age: 35,
    full_name: 'John Snow',
  },
  {
    id: 5,
    first_name: 'John',
    last_name: 'Snow',
    age: 35,
    full_name: 'John Snow',
  },
];
