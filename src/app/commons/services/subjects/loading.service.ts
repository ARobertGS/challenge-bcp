import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class LoadingService {

  private currentState = false;
  private subjectLoading = new BehaviorSubject<boolean>(false);

  loadingSubscribe(): Observable<boolean> {
    return this.subjectLoading.asObservable();
  }

  open() {
    if (!this.currentState) {
      this.currentState = true;
      this.subjectLoading.next(true);
    }
  }

  close() {
    this.currentState = false;
    this.subjectLoading.next(false);
  }

}
