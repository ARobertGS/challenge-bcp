import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  templateUrl: './agencies-detail-view.component.html',
})
export class AgenciesDetailViewComponent implements OnInit, OnDestroy {
  

  constructor(
  ) {
    console.log('agencies deyail view component');
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }

  
}
