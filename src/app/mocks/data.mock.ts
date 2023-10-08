import { Data, Paginated } from '../components/table/types/data.interface';

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

export const emptyBeerData = [
  {
    id: 0,
    name: 'string',
    ibu: 0,
    ph: 0,
    image_url: 'string',
  },
];

export const dataArray = [
  {
    id: 1,
    first_name: 'John',
    last_name: 'Snow',
    age: 35,
    full_name: 'John Snow',
    idq: 1,
    first_name1q: 'John',
    last_nameq: 'Snow',
    ageq: 35,
    full_nameq: 'John Snow',
  },
  {
    id: 2,
    first_name: 'John',
    last_name: 'Snow',
    age: 35,
    full_name: 'John Snow',
    idq: 1,
    first_name1q: 'John',
    last_nameq: 'Snow',
    ageq: 35,
    full_nameq: 'John Snow',
  },
  {
    id: 3,
    first_name: 'John',
    last_name: 'Snow',
    age: 35,
    full_name: 'John Snow',
    idq: 1,
    first_name1q: 'John',
    last_nameq: 'Snow',
    ageq: 35,
    full_nameq: 'John Snow',
  },
  {
    id: 4,
    first_name: 'John',
    last_name: 'Snow',
    age: 35,
    full_name: 'John Snow',
    idq: 1,
    first_name1q: 'John',
    last_nameq: 'Snow',
    ageq: 35,
    full_nameq: 'John Snow',
  },
  {
    id: 5,
    first_name: 'John',
    last_name: 'Snow',
    age: 35,
    full_name: 'John Snow',
    idq: 1,
    first_name1q: 'John',
    last_nameq: 'Snow',
    ageq: 35,
    full_nameq: 'John Snow',
  },
  // {
  //   id: 1,
  //   first_name: 'John',
  //   last_name: 'Snow',
  //   age: 35,
  //   full_name: 'John Snow',
  // },
  // {
  //   id: 2,
  //   first_name: 'John',
  //   last_name: 'Snow',
  //   age: 35,
  //   full_name: 'John Snow',
  // },
  // {
  //   id: 3,
  //   first_name: 'John',
  //   last_name: 'Snow',
  //   age: 35,
  //   full_name: 'John Snow',
  // },
  // {
  //   id: 4,
  //   first_name: 'John',
  //   last_name: 'Snow',
  //   age: 35,
  //   full_name: 'John Snow',
  // },
  // {
  //   id: 5,
  //   first_name: 'John',
  //   last_name: 'Snow',
  //   age: 35,
  //   full_name: 'John Snow',
  // },
  // {
  //   id: 1,
  //   first_name: 'John',
  //   last_name: 'Snow',
  //   age: 35,
  //   full_name: 'John Snow',
  // },
  // {
  //   id: 2,
  //   first_name: 'John',
  //   last_name: 'Snow',
  //   age: 35,
  //   full_name: 'John Snow',
  // },
  // {
  //   id: 3,
  //   first_name: 'John',
  //   last_name: 'Snow',
  //   age: 35,
  //   full_name: 'John Snow',
  // },
  // {
  //   id: 4,
  //   first_name: 'John',
  //   last_name: 'Snow',
  //   age: 35,
  //   full_name: 'John Snow',
  // },
  // {
  //   id: 5,
  //   first_name: 'John',
  //   last_name: 'Snow',
  //   age: 35,
  //   full_name: 'John Snow',
  // },
];

export const PaginatedMock: Paginated<Data> = {
  data: dataArray,
};
