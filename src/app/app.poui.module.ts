import { NgModule } from '@angular/core';
import {
  PoButtonModule,
  PoFieldModule,
  PoDialogModule
} from '@po-ui/ng-components';

@NgModule({
  imports: [
    PoButtonModule,
    PoFieldModule,
    PoDialogModule
  ],
  exports: [
    PoButtonModule,
    PoFieldModule,
    PoDialogModule
  ]
})
export class PouiModule { }
