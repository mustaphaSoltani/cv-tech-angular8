import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthentificationService} from "../authentification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthentificationService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  login(credentials) {
    this.authService.login(credentials).subscribe(
      response => {
        const token = response['id'];
        const link = ['cv'];
        localStorage.setItem('token', token);
        this.router.navigate(link);
      }
    )
  }
}
