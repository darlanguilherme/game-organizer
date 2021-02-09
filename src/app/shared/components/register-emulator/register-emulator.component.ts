import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PoCheckboxGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'app-register-emulator-found',
  templateUrl: './register-emulator.component.html',
  styleUrls: ['./register-emulator.component.scss']
})
export class RegisterEmulatorComponent implements OnInit {

  public emulator: FormGroup = new FormGroup({
    idEmulador: new FormControl(''),
    name: new FormControl(''),
    description: new FormControl(''),
    launchDate: new FormControl(''),
    registerDate: new FormControl(''),
    srcImage: new FormControl(''),
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data) {
    console.log("Data! : ", data)
  }

  ngOnInit(): void { }

  save() {
    console.log("Save")
  }

  cancel() {
    console.log("Cancel")
  }


}
