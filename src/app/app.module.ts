import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';

@NgModule({
  declarations: [AppComponent, TableComponent, SafeHtmlPipe],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
