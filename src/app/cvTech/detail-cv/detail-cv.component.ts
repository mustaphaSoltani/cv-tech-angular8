import {Component, Input, OnInit} from '@angular/core';
import {Personne} from '../../Model/Personne';
import {EmbaucheService} from '../embauche.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent implements OnInit {
  @Input() person: Personne;

  constructor(private embaucheService: EmbaucheService,
              private route: Router
  ) {
  }

  ngOnInit() {
    // console.log(this.person.path);
  }

  embaucher() {
    this.embaucheService.embaucher(this.person);
  }

  moreInfo() {
    const link = ['cv', this.person.id];
    this.route.navigate(link);
  }
}
