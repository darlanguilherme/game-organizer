import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public games = ['aa', 'bb', 'cc', 'dd', 'ee', 'oo']

  constructor(private router: Router) { }

  ngOnInit(): void { }

}
