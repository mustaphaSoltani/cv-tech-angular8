import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from "../authentification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 visibility = false;
  constructor(private authentificationService: AuthentificationService,
              private router: Router) { }

  ngOnInit(): void {
  }
logout(){
  this.authentificationService.logout();
this.router.navigate(['cv'])
}

  show() {
    this.visibility = !this.visibility ;
  }
}
