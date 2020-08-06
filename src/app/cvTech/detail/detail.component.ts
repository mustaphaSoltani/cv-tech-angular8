import {Component, OnInit, Output} from '@angular/core';
import {CvService} from '../cv.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Personne} from '../../Model/Personne';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  personne: Personne;

  constructor(
    private cvService: CvService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(
      (params) => {
        console.log("params "+params.id);
        this.cvService.getPersonneById(params.id).subscribe(
          (personne) => {
            console.log("p"+personne);
            this.personne = personne;
            console.log("personne"+this.personne);
          }
        );
      });
  }

  deletePersonne() {
    this.cvService.deletePersonne(this.personne.id).subscribe(
      (response) => {
        const link = ['cv'];
        this.router.navigate(link);
      }, (error) => console.log(error)
    );
  }

  updatePersonne(id: number) {
    const link = ['cv/cvUpdate',id];
    this.router.navigate(link);

  }
}
