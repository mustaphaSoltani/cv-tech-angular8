import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bgColor = 'yellow';
  show = false;

  // tslint:disable-next-line:typedef
  changeStatus() {
    this.show = !this.show;
  }
}
