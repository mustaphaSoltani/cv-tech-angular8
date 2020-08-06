import { Component, OnInit } from '@angular/core';
import {Personne} from '../../Model/Personne';
import {PremierService} from '../../premier.service';
import {CvService} from '../cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  personnes: Personne [];
  selectedPersonne: Personne;
  constructor(
    private cvService: CvService
  ) { }

  ngOnInit() {
    //this.personnes = this.cvService.getPersonne();
    this.cvService.getPersonne().subscribe(
      (personnes) => {
        this.personnes = personnes;
      },
      (error) => {
        alert('Probleme d accés à l api les données affichées sont fakes');
        this.personnes = this.cvService.getFakePersonne();
      }
    );
  }

  selectPersonne(personne) {
    this.selectedPersonne = personne;
  }
}
