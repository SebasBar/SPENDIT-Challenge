import { Component, Input, OnInit } from '@angular/core';
import { Data } from './types/data.interface';
import { headerArray, emptyDataArray } from './mocks/data.mock';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  constructor(private sanitizer: DomSanitizer) {}

  // trustedDashboardUrl: SafeUrl;

  @Input() headerArray: Array<keyof Data> = headerArray;
  @Input() dataArray: Data[] = emptyDataArray;
  // headerArray: Array<keyof Data> = headerArray;
  // dataArray: Data[] = dataArray;
  @Input({ required: true }) columns: string;

  ngOnInit(): void {
    console.log('this.columns', this.columns);
    console.log('this.isHtml(this.columns)', this.isHtml(this.columns));
    console.log('this.isSafeHtml(this.columns)', this.isSafeHtml(this.columns));
  }

  isHtml(input: string): boolean {
    const regexHtmlValidation = /<([A-Za-z][A-Za-z0-9]*)\b[^>]*>(.*?)<\/\1>/;
    return regexHtmlValidation.test(input);
  }

  isSafeHtml(input: string): boolean {
    const sanitizedHtml: SafeHtml =
      this.sanitizer.bypassSecurityTrustHtml(input);
    return sanitizedHtml.toString() === input;
  }
}
