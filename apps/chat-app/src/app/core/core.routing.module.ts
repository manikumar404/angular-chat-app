import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShellService} from "../shell/shell.service";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path:'auth',
    loadChildren: ()=> import('../auth/auth.module').then(m =>m.AuthModule),
  },
  ShellService.childRoutes(
    [
      {
        path: 'chat',
        loadChildren: ()=> import('../chat/chat.module').then(m=>m.ChatModule)
      },
      {
        path: 'friends',
        loadChildren: ()=> import('../friends/friends.module').then(m=>m.FriendsModule)
      },
      {
        path: 'profile',
        loadChildren: ()=> import('../profile/profile.module').then(m => m.ProfileModule)
      }
    ]
  )

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
})
export class CoreRoutingModule { }
