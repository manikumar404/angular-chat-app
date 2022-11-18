import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from "primeng/inputtext";


@NgModule({
  imports: [
    CommonModule,
    MenubarModule,
    InputTextModule

  ],
  declarations: [HeaderComponent],
  exports: [
    HeaderComponent,
  ]
})
export class SharedHeaderModule {}
