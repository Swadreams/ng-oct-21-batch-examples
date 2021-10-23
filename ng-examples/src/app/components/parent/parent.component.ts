import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  OnChanges,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  parentData: string = '';
  recievedData = '';
  showChild = true;
  @ViewChild('parentTitle') parentTitle: ElementRef | undefined;
  @ViewChild('parentInput') parentInput: ElementRef | undefined;

  constructor() {
    console.log('Parent Constructor');
  }

  ngOnInit(): void {
    console.log('1. Parent : ngOnInit');
    console.log('parentTitle ref', this.parentTitle);
  }

  ngOnChanges() {
    console.log('2. Parent : ngOnChanges');
  }

  ngDoCheck() {
    console.log('3. Parent : ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('4. Parent : ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('5. Parent : ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('6. Parent : ngAfterViewInit');
    console.log('parentTitle ref', this.parentTitle?.nativeElement);
  }

  ngAfterViewChecked() {
    console.log('7. Parent : ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('Parent : ngOnDestroy');
  }

  showMessage(): void {
    alert('I am clicked');
  }

  onDataRecived(event: any) {
    this.recievedData = event;
  }

  toggleChild() {
    console.log(this.parentInput);
    this.showChild = !this.showChild;
  }
}
