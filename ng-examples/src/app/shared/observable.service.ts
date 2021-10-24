import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ObservableService {
  constructor() {}

  getValues() {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);
      setTimeout(() => {
        observer.next(2);
      }, 2000);
      setTimeout(() => {
        observer.error('Error from observable');
      }, 3000);
      setTimeout(() => {
        observer.complete();
      }, 4000);
    });
  }
}
