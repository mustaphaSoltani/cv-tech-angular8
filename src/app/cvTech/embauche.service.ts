import {Injectable} from '@angular/core';
import {Personne} from '../Model/Personne';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  personnes: Personne[];

  constructor() {
    this.personnes = [];
  }

  getEmbauchees(): Personne[] {
    return this.personnes;
  }

  embaucher(person: Personne): void {
    const index = this.personnes.indexOf(person);
    if (index < 0) {
      this.personnes.push(person);
    } else {
      alert(`${person.name} est deja séléctionné`);
    }
  }

  debaucher(person: Personne): void {
    const index = this.personnes.indexOf(person);
    if (index >= 0) {
      this.personnes.splice(index, 1);
    }
  }
}
