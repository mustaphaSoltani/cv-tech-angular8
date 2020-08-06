import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {
  @Input() filsProperty;
  @Output() sendRequesToData = new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log('Voici le contenue de la variable color de mon pere:', this.filsProperty);
  }
 sendEvent() {
    this.sendRequesToData.emit(
      'Please can i have some money :) '
    );
 }
}
