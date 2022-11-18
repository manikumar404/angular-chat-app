import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllFriendsComponent } from './components/all-friends/all-friends.component';
import {AccordionModule} from "primeng/accordion";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
@NgModule({
  imports: [
    CommonModule,
    AccordionModule,
    BrowserAnimationsModule,
  ],
    declarations: [AllFriendsComponent],
    exports: [
        AllFriendsComponent
    ]
})
export class FriendsModule {}
