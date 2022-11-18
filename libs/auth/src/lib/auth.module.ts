import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [CommonModule, RouterModule],
  declarations: [LoginComponent, RegisterComponent, AuthenticationComponent],
})
export class AuthModule {}
