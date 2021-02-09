import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PouiModule } from "../app.poui.module";
import { TranslateModule } from '@ngx-translate/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from "../app.material.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WebviewDirective, ResizableDirective } from './directives/';

import {
  InputComponent,
  SidenavComponent,
  MenuListComponent,
  TitlebarComponent,
  GamesListComponent,
  InputImageComponent,
  SidenavListComponent,
  RegisterGameComponent,
  PageNotFoundComponent,
  TitlebarActionsComponent,
} from './components/';

@NgModule({
  declarations: [
    InputComponent,
    WebviewDirective,
    SidenavComponent,
    MenuListComponent,
    TitlebarComponent,
    GamesListComponent,
    ResizableDirective,
    InputImageComponent,
    SidenavListComponent,
    PageNotFoundComponent,
    RegisterGameComponent,
    TitlebarActionsComponent,
  ],
  imports: [
    PouiModule,
    FormsModule,
    CommonModule,
    MaterialModule,
    TranslateModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    AngularSvgIconModule,
  ],
  exports: [
    FormsModule,
    InputComponent,
    TranslateModule,
    SidenavComponent,
    WebviewDirective,
    MenuListComponent,
    TitlebarComponent,
    ResizableDirective,
    GamesListComponent,
    ReactiveFormsModule,
    InputImageComponent,
    SidenavListComponent,
    PageNotFoundComponent,
    RegisterGameComponent,
    TitlebarActionsComponent,
  ]
})
export class SharedModule { }
