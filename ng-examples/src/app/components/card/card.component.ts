import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  OnInit,
  QueryList,
  ViewChild,
} from '@angular/core';
import { DateComponent } from '../date/date.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit, AfterContentInit {
  // @ContentChild(DateComponent) dateComponentRef: DateComponent | undefined;
  @ContentChildren(DateComponent, { descendants: true }) dateComponentRef:
    | QueryList<DateComponent>
    | undefined;

  constructor() {}

  ngOnInit(): void {}

  // ngAfterContentInit() {
  //   console.log('dateComponentRef :', this.dateComponentRef?.toArray());

  //   // setInterval(() => {
  //   //   if (this.dateComponentRef) {
  //   //     this.dateComponentRef.today = new Date();
  //   //   }
  //   // }, 1000);
  // }

  ngAfterContentInit() {
    // console.log('dateComponentRef :', this.dateComponentRef);
    console.log('dateComponentRef :', this.dateComponentRef?.toArray());
  }
}
