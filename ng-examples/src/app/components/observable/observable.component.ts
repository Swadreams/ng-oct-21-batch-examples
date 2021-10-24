import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css'],
})
export class ObservableComponent implements OnInit {
  data: any;
  constructor() {}

  ngOnInit(): void {
    this.createObservable();
  }

  createObservable() {
    this.data = new Observable((observer) => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);
      setTimeout(() => {
        observer.error('Error from observable');
      }, 2000);
      setTimeout(() => {
        observer.complete();
      }, 3000);
    });

    this.data.subscribe(
      (res: any) => {
        console.log(res);
      },
      (err: any) => console.log('Errro: ', err)
    );
  }
}
