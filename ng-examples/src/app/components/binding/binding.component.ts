import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css'],
})
export class BindingComponent implements OnInit {
  firstNumber: number = 0;
  secondNumber: number = 0;
  constructor() {}

  ngOnInit(): void {}
}
