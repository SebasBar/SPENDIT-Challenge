import { Component } from '@angular/core';
import {
  headerArray,
  dataArray,
  PaginatedMock,
} from './components/table/mocks/data.mock';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'spendit-challenge';
  headerArray = headerArray;
  dataArray = PaginatedMock;
}
