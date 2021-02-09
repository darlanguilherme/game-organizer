import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterGameComponent } from "../../../shared/components/";

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  public file = null;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void { }

  public openRegisterGame() {
    this.openDialog(RegisterGameComponent);
  }

  public openRegisterEmulator() {
    this.openDialog(RegisterGameComponent);
  }

  public openDialog(component) {
    const dialog = this.dialog.open(component, {
      data: {
        animal: 'panda'
      },
      panelClass: 'register-game-dialog'
    });

    dialog.afterClosed().subscribe(result => {
      console.log("Result aqui: ", result)
    })
  }

}
