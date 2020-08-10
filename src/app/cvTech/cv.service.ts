import {Injectable} from '@angular/core';
import {Personne} from '../Model/Personne';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CvService {
  personnes: Personne [];
  link = 'http://localhost:3000/api/personnes';

  constructor(
    private http: HttpClient
  ) {
    this.personnes = [
      new Personne(1, 'soltani', 'Mustapha', 34, 'foto.jpg', 777777, 'consultant'),
      new Personne(2, 'Zidane', 'Zineddine', 40, 'zizou.jpg', 888888, 'Footballer')
    ];
  }

  getFakePersonne(): Personne[] {
    return this.personnes;
  }

  getPersonne(): Observable<Personne[]> {
    return this.http.get<Personne[]>(this.link);
  }

  getPersonneById(id: number): Observable<Personne> {
    return this.http.get<Personne>(this.link + `/${id}`);
  }

  addPersonne(personne: Personne): Observable<any> {
    // personne.id = this.personnes[this.personnes.length - 1].id + 1;
    // this.personnes.push(personne);
    return this.http.post(this.link, personne);
  }

  deletePersonne(id: number) {
    return this.http.delete(this.link + `/${id}`);
  }

  updatePersone(personne: Personne) {
    console.log(personne);
    return this.http.put(this.link, personne);

  }

  findByName(name):  Observable<Personne[]> {
    const filter = `{"where":{"name":{"like":"%${name}%"}}}`;
    const params = new HttpParams().set('filter', filter);
    return this.http.get<Personne[]>(this.link, {params});
  }
}
