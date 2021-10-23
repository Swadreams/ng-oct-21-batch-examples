import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  parentData: string = '';
  recievedData = '';

  constructor() {}

  ngOnInit(): void {}

  showMessage(): void {
    alert('I am clicked');
  }

  onDataRecived(event: any) {
    this.recievedData = event;
  }
}
