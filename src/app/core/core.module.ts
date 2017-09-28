import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';

import { APP_CONFIG } from 'config';
import { AuthService } from 'app/core/services/auth.service';
import { AuthGuard } from 'app/core/guards/auth.guard';
import { Store } from 'app/core/store';
import { UserService } from 'app/core/services/user.service';

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(APP_CONFIG.firebase),
    AngularFireAuthModule
  ],
  declarations: []
})
export class CoreModule {

  // for duplicate instances
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [
        AuthService,
        AuthGuard,
        UserService,
        Store
      ]
    }
  }
 }
