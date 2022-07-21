import { Component, OnInit } from '@angular/core';
import data from '../data/New-releases.json';
@Component({
  selector: 'app-new-releases',
  templateUrl: './new-releases.component.html',
  styleUrls: ['./new-releases.component.css']
})
export class NewReleasesComponent implements OnInit {

  gridColumns = 3;
  releases: any ;//= data.albums.items;
  constructor() { }

  ngOnInit(): void {
    this.releases = data.albums.items;
  }

}
