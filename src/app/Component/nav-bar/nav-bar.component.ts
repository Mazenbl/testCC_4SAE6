import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  albums = [
    { id: 1, title: 'Album 1' },
    { id: 2, title: 'Album 2' },
  ];
}
