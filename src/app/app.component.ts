import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title: string = 'hello class from angular';
  student: string = 'Kerry';
  displayName: boolean = true;
  helpTimes: number[] = [5,4,3,2,1];
}
