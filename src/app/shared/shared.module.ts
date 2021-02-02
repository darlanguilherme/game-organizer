import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { WebviewDirective, ResizableDirective } from './directives/';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from "../app.material.module";
import { PouiModule } from "../app.poui.module";
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  PageNotFoundComponent,
  TitlebarComponent,
  TitlebarActionsComponent,
  SidenavComponent,
  InputComponent,
  SidenavListComponent,
  GamesListComponent,
  RegisterGameComponent,
  InputImageComponent
} from './components/';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    TitlebarComponent,
    TitlebarActionsComponent,
    SidenavComponent,
    InputComponent,
    SidenavListComponent,
    GamesListComponent,
    WebviewDirective,
    ResizableDirective,
    RegisterGameComponent,
    InputImageComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    PouiModule,
    FlexLayoutModule
  ],
  exports: [
    TranslateModule,
    WebviewDirective,
    ResizableDirective,
    FormsModule,
    ReactiveFormsModule,
    TitlebarComponent,
    TitlebarActionsComponent,
    SidenavComponent,
    InputComponent,
    SidenavListComponent,
    GamesListComponent,
    PageNotFoundComponent,
    RegisterGameComponent,
    InputImageComponent
  ]
})
export class SharedModule { }
