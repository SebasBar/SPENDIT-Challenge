import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BeersService {
  url = 'https://api.punkapi.com/v2/beers';
  results: Array<any>;
  // ?page=1&per_page=2
  constructor(private httpClient: HttpClient) {
    this.results = [];
  }

  getAllBeers(): Observable<Array<any>> {
    return this.httpClient.get<Array<any>>(this.url).pipe(
      tap((beers: any) => {
        JSON.stringify(beers);
        console.log('beers', beers);
      })
    );
  }

  getBeersPaginated(page: number, perPage: number): Observable<Array<any>> {
    return this.httpClient
      .get<Array<any>>(`${this.url}?page=${page}&per_page=${perPage}`)
      .pipe(
        tap((beers) => JSON.stringify(beers)),
        catchError(this.handleError)
      );
  }

  private handleError(error: ErrorEvent) {
    return throwError(() => error.error.message);
  }
}
