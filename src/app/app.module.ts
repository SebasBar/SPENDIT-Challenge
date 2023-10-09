import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [AppComponent, TableComponent, SafeHtmlPipe, HomeComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, NgxPaginationModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
