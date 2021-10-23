import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnChanges,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  @Input() data: string = '';
  @Output() onChildData = new EventEmitter();
  childData: string = '';

  constructor() {
    console.log('Child Constructor');
  }

  shareData() {
    this.onChildData.emit(this.childData);
  }

  logParentData() {
    console.log('Parent Data', this.data);
  }

  ngOnInit(): void {
    console.log('1. Child : ngOnInit');
  }

  ngOnChanges() {
    console.log('2. Child : ngOnChanges');
  }

  ngDoCheck() {
    console.log('3. Child : ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('4. Child : ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('5. Child : ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('6. Child : ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('7. Child : ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('Child : ngOnDestroy');
  }
}
