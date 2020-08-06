import {Component, Input, OnInit, Output} from '@angular/core';
import {Personne} from "../../Model/Personne";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {CvService} from "../cv.service";

@Component({
  selector: 'app-cv-update',
  templateUrl: './cv-update.component.html',
  styleUrls: ['./cv-update.component.css']
})
export class CvUpdateComponent implements OnInit {
  personne: Personne = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private cvService: CvService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(
      (param) => {
        this.cvService.getPersonneById(param.id).subscribe(
          (personne) => {
            this.personne = personne;
          }
        );
      });
  }
updatePersonne(){
    this.cvService.updatePersone(this.personne).subscribe(
      (reponse)=>{
       const link = ['cv'];
        this.router.navigate(link);
      }
    )

}
}
