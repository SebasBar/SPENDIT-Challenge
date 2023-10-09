import {
  BeerData,
  Paginated,
  Pagination,
} from './../../components/table/types/data.interface';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { headerArray, emptyPaginatedMock } from '../../mocks/data.mock';
import { BeersService } from 'src/app/services/beers.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(private beerService: BeersService) {}
  title = 'spendit-challenge';
  headerArray = headerArray;
  dataArray = emptyPaginatedMock;
  paginated: Paginated<BeerData>;
  subscriptions: Subscription[] = [];
  page = 1;
  per_page = 5;
  totalItems = 90;

  ngOnInit(): void {
    this.getBeers(this.page, this.per_page);
  }

  onPageChange(pagination: Pagination) {
    this.getBeers(pagination.page, pagination.per_page);
    console.log('pagination', pagination);
    console.log('this.paginated', this.paginated);
  }

  getBeers(page: number, per_page: number) {
    this.subscriptions.push(
      this.beerService.getBeersPaginated(page, per_page).subscribe({
        next: (beerResponse) => {
          this.paginated = {
            data: beerResponse.map((beer) => {
              return {
                id: beer.id,
                name: beer.name,
                tagline: beer.tagline,
                ibu: beer.ibu,
                ph: beer.ph,
              };
            }),
            page,
            per_page,
            total_items: this.totalItems,
          };
        },
        error: (err) => console.error(err),
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
