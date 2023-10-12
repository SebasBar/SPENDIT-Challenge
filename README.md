# SpenditChallenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.1.

## Running the app

Run `npm install` and `ng serve` to run the project in developer server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Description

This app fetches information from Punk API [Punk API Documentation](https://punkapi.com/documentation/v2). It's fetching the maximum number of beers.

some comments:

- Added select all (per page) functionality.
- Added pipe to check custom html.
- Added a selection of items per page to display.
- The implementation does not use a custom user string for the column headers but it is supported.
- For pagination, 'ngx-pagination' package has been used.
- The selected rows can be seen in the console when entering select mode.

## Improvements

- Add pagination translation.
- Add loader when fetching.
- Add persistent item selection.
- Add tests.
