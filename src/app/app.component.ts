import { Component, Inject } from '@angular/core';
import { ElectronService, DatabaseService } from './core/services';
import { TranslateService } from '@ngx-translate/core';
import { AppConfig } from '../environments/environment';
import { PoDialogAlertLiterals, PoDialogConfirmLiterals, PoDialogOptions, PoDialogService } from '@po-ui/ng-components';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RegisterGameComponent } from "./shared/components/";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public show = true;
  public widthDrawer;

  action: string;
  actionOptions: Array<string>;
  dialogMethod: string;
  help: string;
  literals: string;
  literalsAlert: PoDialogAlertLiterals;
  literalsConfirm: PoDialogConfirmLiterals;
  poAlertOptions = {
    title: "Cadastro de jogos"
  }
  message: string;
  title: string;

  constructor(
    private DatabaseService: DatabaseService,
    private electronService: ElectronService,
    private translate: TranslateService,
    private poAlert: PoDialogService,
    public dialog: MatDialog
  ) {



    this.translate.setDefaultLang('en');
    console.log('AppConfig', AppConfig);

    if (electronService.isElectron) {
      console.log(process.env);
      console.log('Run in electron');
      console.log('Electron ipcRenderer', this.electronService.ipcRenderer);
      console.log('NodeJS childProcess', this.electronService.childProcess);
    } else {
      console.log('Run in browser');
    }
  }

  public abrir() {
    this.dialog.open(RegisterGameComponent, {
      data: {
        animal: 'panda'
      }
    });
  }

}

