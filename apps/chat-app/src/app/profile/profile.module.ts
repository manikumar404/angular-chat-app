import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UserProfileComponent} from '@chat-app-fe/profile';

const routes: Routes =[
  {
    path: '',
    component: UserProfileComponent
  }
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ]
})
export class ProfileModule { }
