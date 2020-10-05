import { Component, OnInit } from '@angular/core';
import { remote } from 'electron';


@Component({
  selector: 'app-titlebar-actions',
  templateUrl: './titlebar-actions.component.html',
  styleUrls: ['./titlebar-actions.component.scss']
})
export class TitlebarActionsComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }

  teste(){
    console.log(remote.getCurrentWindow().minimize())
  }
}
