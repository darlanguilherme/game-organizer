import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { PageNotFoundComponent, TitlebarComponent, TitlebarActionsComponent, SidenavComponent, InputComponent, SidenavListComponent, GamesListComponent } from './components/';
import { WebviewDirective, ResizableDirective } from './directives/';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from "../app.material.module";
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [PageNotFoundComponent, TitlebarComponent, TitlebarActionsComponent, SidenavComponent, InputComponent, SidenavListComponent, GamesListComponent, WebviewDirective, ResizableDirective],
  imports: [CommonModule, TranslateModule, FormsModule, MaterialModule, FlexLayoutModule],
  exports: [TranslateModule, WebviewDirective, ResizableDirective, FormsModule, TitlebarComponent, TitlebarActionsComponent, SidenavComponent, InputComponent, SidenavListComponent, GamesListComponent, PageNotFoundComponent]
})
export class SharedModule { }
