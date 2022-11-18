import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AllFriendsComponent} from "@chat-app-fe/friends";

const routes: Routes = [
  {
    path: '',
    component: AllFriendsComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FriendsModule { }
