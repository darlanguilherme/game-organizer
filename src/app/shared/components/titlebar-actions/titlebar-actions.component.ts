import { Component, OnInit } from '@angular/core';
import { ElectronService } from "../../../core/services/electron/electron.service";


@Component({
  selector: 'app-titlebar-actions',
  templateUrl: './titlebar-actions.component.html',
  styleUrls: ['./titlebar-actions.component.scss']
})
export class TitlebarActionsComponent implements OnInit {
  constructor(public electron: ElectronService) { }

  ngOnInit(): void { }

  teste() {
    console.log(this.electron.remote.getCurrentWindow().isMaximized())

  }
}
