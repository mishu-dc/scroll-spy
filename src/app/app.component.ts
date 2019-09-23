import { Component, OnInit } from '@angular/core';

import { ScrollSpyService } from '@uniprank/ngx-scrollspy';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'scroll-spy';
  selected = 'section2';

  constructor(private _scrollSpyService: ScrollSpyService) {}

  ngOnInit() {
      this._scrollSpyService.setOffset('window', 100);
  }

  changeSelected(value: string) {
    if (value !== this.selected) {
      this.selected = value;
    }
  }
}
