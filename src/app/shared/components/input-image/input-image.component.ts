import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-image',
  templateUrl: './input-image.component.html',
  styleUrls: ['./input-image.component.scss']
})
export class InputImageComponent implements OnInit {

  public file = null;

  constructor() { }

  ngOnInit(): void { }
}
