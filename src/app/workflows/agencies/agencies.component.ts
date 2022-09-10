import { Component, ViewContainerRef, OnInit } from '@angular/core';

@Component({
  templateUrl: './agencies.component.html',
})
export class AgenciesComponent implements OnInit {

  constructor(
    private vcr: ViewContainerRef,
  ) { 
    console.log('agencies component')
  }

  ngOnInit(): void {
    // this.messageRepsol.init(this.vcr);
  }
}
