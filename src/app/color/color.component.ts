import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  color = 'red';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) =>{
        this.color = params.default;
      }
    );
  }

  // tslint:disable-next-line:typedef
  processReq(message: any) {
    alert(message);
  }

  goToCv() {
    const link = ['cv'];
    this.router.navigate(link);
  }
}
