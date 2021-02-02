import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PoCheckboxGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'app-register-game-found',
  templateUrl: './register-game.component.html',
  styleUrls: ['./register-game.component.scss']
})
export class RegisterGameComponent implements OnInit {

  public game: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    description: new FormControl(''),
    launchDate: new FormControl(''),
    registerDate: new FormControl(''),
    tags: new FormControl([]),
    srcImage: new FormControl(''),
    idEmulator: new FormControl(''),
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data) {
    console.log("Data! : ", data)
  }

  ngOnInit(): void { }

  onSubmit(game) {
    console.log("GAME: ", game)
  }
}
