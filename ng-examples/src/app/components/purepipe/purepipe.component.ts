import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purepipe',
  templateUrl: './purepipe.component.html',
  styleUrls: ['./purepipe.component.css'],
})
export class PurepipeComponent implements OnInit {
  filterValue = 0;
  newNumber: number | null = null;
  digits: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor() {}

  ngOnInit(): void {}

  addNumber() {
    this.digits.push(Number(this.newNumber));
    console.log(this.digits);
  }
}
