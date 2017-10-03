import { BrowserModule } from '@angular/platform-browser';
import { MdlModule } from '@angular-mdl/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from 'app/core/core.module';
import { APP_CONFIG } from '../config';
import { AuthGuard } from 'app/core/guards/auth.guard';
import { HomeComponent } from 'app/home.component';
import { Store } from 'app/core/store';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  { path: 'friends', canActivate: [AuthGuard], loadChildren: './friends/friends.module#FriendsModule' },
  { path: 'profile', canActivate: [AuthGuard], loadChildren: './profile/profile.module#ProfileModule' },
  { path: '**', redirectTo: 'auth' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    CoreModule.forRoot(),
    MdlModule
  ],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule { }
