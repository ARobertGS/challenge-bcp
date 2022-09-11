import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './agencies.component.html',
})
export class AgenciesComponent implements OnInit {

  constructor(
  ) { 
    console.log('agencies component')
  }

  ngOnInit(): void {
  }
}
