import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-register-game-found',
  templateUrl: './register-game.component.html',
  styleUrls: ['./register-game.component.scss']
})
export class RegisterGameComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data) {
    console.log("Data! : ", data)
  }

  ngOnInit(): void { }
}
