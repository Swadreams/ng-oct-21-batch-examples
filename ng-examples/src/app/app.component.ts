import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-examples';
  showMe = true;

  // skills = ['html', 'css', 'javascript'];
  skills = [1, 2, 3, 4, 5, 6];
}
