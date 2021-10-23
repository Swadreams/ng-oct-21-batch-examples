import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { DateComponent } from '../date/date.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit, AfterViewInit {
  // @ViewChild(DateComponent) dateComponentRef: DateComponent | undefined;
  @ViewChildren(DateComponent) dateComponentRef:
    | QueryList<DateComponent>
    | undefined;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    console.log('dateComponentRef : ', this.dateComponentRef?.toArray());
    setInterval(() => {
      if (this.dateComponentRef) {
        // this.dateComponentRef.today = new Date();
        this.dateComponentRef.toArray()[1].today = new Date();
      }
    }, 1000);
  }
}
