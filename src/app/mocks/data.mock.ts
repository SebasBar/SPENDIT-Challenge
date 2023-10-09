import { BeerData, Paginated } from '../components/table/types/data.interface';

export const headerArray: Array<keyof BeerData> = [
  'id',
  'name',
  'ibu',
  'ph',
  'tagline',
];

export const emptyBeerData: BeerData[] = [
  {
    id: 0,
    name: '',
    ibu: 0,
    ph: 0,
    tagline: '',
  },
];

export const emptyPaginatedMock: Paginated<BeerData> = {
  data: emptyBeerData,
  page: 1,
  per_page: 5,
  total_items: 90,
};
