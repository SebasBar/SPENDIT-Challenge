import {
  BeerData,
  Paginated,
} from './../../components/table/types/data.interface';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { headerArray, PaginatedMock } from '../../mocks/data.mock';
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
  dataArray = PaginatedMock;
  paginated: Paginated<BeerData>;
  subscriptions: Subscription[] = [];

  ngOnInit(): void {
    // this.subscriptions.push(
    this.beerService.getAllBeers().subscribe({
      next: (beerResponse) => {
        console.log('beerResponse', beerResponse);
        this.paginated = {
          data: beerResponse.map((beer) => {
            return {
              id: beer.id,
              name: beer.name,
              ibu: beer.ibu,
              ph: beer.ph,
              image_url: beer.image_url,
            };
          }),
        };
        console.log('this.paginated', this.paginated);
      },
      error: (err) => console.error(err),
    });
    // );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
