import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
  show = true;
teams = [
  'est',
  'om',
  'barca',
  'milan'
]
  constructor() { }

  ngOnInit() {
  }

}
