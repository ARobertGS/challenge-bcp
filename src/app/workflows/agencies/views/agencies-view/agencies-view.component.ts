import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  templateUrl: './agencies-view.component.html',
})
export class AgenciesViewComponent implements OnInit, OnDestroy {
  

  constructor(
  ) {
    console.log('agencies view component');
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }

  
}
