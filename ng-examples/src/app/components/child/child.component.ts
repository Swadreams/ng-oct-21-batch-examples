import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() data: string = '';
  @Output() onChildData = new EventEmitter();
  childData: string = '';

  constructor() {}

  ngOnInit(): void {
    console.log('Child data:', this.data);
  }

  shareData() {
    this.onChildData.emit(this.childData);
  }
}
