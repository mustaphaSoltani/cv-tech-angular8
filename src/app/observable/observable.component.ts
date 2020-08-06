import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
monObservable: Observable<string>;
mesImages = [
  'cvNotFound.png',
  'error.jpg',
  'error.png',
  'foto.jpg',
  'zizou.jpg'
];
currentImage: string;
  constructor() { }

  ngOnInit(): void {
  this.monObservable = new Observable(
    (obsr) => {
      let i = this.mesImages.length - 1;
      setInterval(
        () => {
          obsr.next(this.mesImages[i]);
          if ((i > 0)){
            i--;
          }else {
            i = this.mesImages.length - 1;
          }
        }
        , 1500 );
    }
  );
  this.monObservable.subscribe(
    (reult) => {
      this.currentImage = reult;
    }
  );
  }

}
