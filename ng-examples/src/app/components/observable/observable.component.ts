import { Component, OnInit } from '@angular/core';
import { ObservableService } from 'src/app/shared/observable.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css'],
})
export class ObservableComponent implements OnInit {
  data: any;
  subscriber1: any;
  subscriber2: any;
  constructor(private observableService: ObservableService) {}

  ngOnInit(): void {
    this.createObservable();
  }

  createObservable() {
    this.subscriber1 = this.observableService.getValues().subscribe(
      (res: any) => {
        this.data = res;
        console.log('subscriber1 :', res);
      },
      (err: any) => console.log('Errro: ', err)
    );

    this.subscriber2 = this.observableService.getValues().subscribe(
      (res: any) => {
        this.subscriber1.unsubscribe();
        console.log('subscriber2 :', res);
      },
      (err: any) => console.log('Errro: ', err)
    );
  }
}
