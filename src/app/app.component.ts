/*********************************************************************************
* WEB422 – Assignment 05
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of this
* assignment has been copied manually or electronically from any other source (including web sites) or
* distributed to other students.
*
* Name: __Sourena Moradi___ Student ID: __153540208__ Date: _8.5.2022____
*
* Angular App (Deployed) Link: _____________________________________________________
*
* User API (Heroku) Link: https://stormy-earth-38767.herokuapp.com/
*
********************************************************************************/
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, NavigationStart } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Music';
  searchString: string = "";
  token!: any;

  constructor(private router: Router, private auth: AuthService) {}

  handleSearch(f: NgForm): void {
    this.router.navigate(['/search'], {
      queryParams: { q: this.searchString },
    });
    this.searchString = "";
  }
  ngOnInit(): void {
    this.searchString = '';

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.token = this.auth.readToken();
      }
    });
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}