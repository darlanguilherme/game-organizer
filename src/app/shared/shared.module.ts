import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { PageNotFoundComponent, TitlebarComponent, TitlebarActionsComponent } from './components/';
import { WebviewDirective } from './directives/';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from "../app.material.module";
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [PageNotFoundComponent, TitlebarComponent, TitlebarActionsComponent, WebviewDirective],
  imports: [CommonModule, TranslateModule, FormsModule, MaterialModule, FlexLayoutModule],
  exports: [TranslateModule, WebviewDirective, FormsModule, TitlebarComponent, TitlebarActionsComponent, PageNotFoundComponent]
})
export class SharedModule { }
