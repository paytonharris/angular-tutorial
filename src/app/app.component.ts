import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'angular-app';
  potato: string = 'hello, am potate';
  potato2 = 'oh henlo little lizard';
}
