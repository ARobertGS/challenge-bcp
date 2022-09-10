import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingService } from '../../../services/subjects/loading.service';

@Component({
  selector: 'rp-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit, OnDestroy {
  @Input() open = false;
  loadingSubscription: Subscription;

  constructor(
    private loadingService: LoadingService,
  ) {
    this.loadingSubscription = Subscription.EMPTY;
  }

  ngOnInit() {
    this.actionLoading();
  }

  ngOnDestroy() {
    this.loadingSubscription.unsubscribe();
  }

  actionLoading() {
    this.loadingSubscription = this.loadingService.loadingSubscribe().subscribe((status: boolean) => {
      this.open = status;
    });
  }

}
