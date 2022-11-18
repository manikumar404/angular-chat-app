import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedHeaderModule} from "@chat-app-fe/shared/header";
import {ShellComponent} from "./shell.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    ShellComponent
  ],
  imports: [
    CommonModule,
    SharedHeaderModule,
    RouterModule,
  ],
  exports: [
    ShellComponent
  ]
})
export class ShellModule { }
