import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {

  typesOfShoes: string[] = ['Playstation', 'Playstation 2', 'Super Nintendo', 'Pc'];

  constructor() { }

  ngOnInit(): void { }
}
