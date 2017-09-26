import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './login/login.component';
import { CoreModule } from 'app/core/core.module';

const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedModule,
    CoreModule
  ],
  declarations: [ LoginComponent ]
})
export class AuthModule { }
