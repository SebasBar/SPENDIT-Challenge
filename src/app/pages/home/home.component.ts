import {
  Data,
  Paginated,
  Pagination,
} from './../../components/table/types/data.interface';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BeersService } from 'src/app/services/beers.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(private beerService: BeersService) {}
  paginated: Paginated<Data>;
  paginatedPromise: Promise<Paginated<Data>>;
  subscriptions: Subscription[] = [];
  page = 1;
  per_page = 10;
  totalItems = 325;
  showLoading = false;

  ngOnInit(): void {
    this.getBeersPaginated(this.page, this.per_page);
  }

  onPageChange(pagination: Pagination) {
    this.getBeersPaginated(pagination.page, pagination.per_page);
  }

  onUserSelect(userSelectedRows: Data[]) {
    console.log('userSelectedRows', userSelectedRows);
  }

  getBeersPaginated(page: number, per_page: number) {
    this.showLoading = true;
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
          this.showLoading = false;
          this.paginatedPromise = new Promise((res, _) => res(this.paginated));
        },
        error: (err) => console.error(err),
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
