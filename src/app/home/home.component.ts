import { Component, OnInit, OnDestroy } from '@angular/core';
// import { LoadingService } from '../commons/services/subjects/loading.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(
    // private loadingService: LoadingService,
  ) {}

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
}
