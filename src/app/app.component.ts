
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
