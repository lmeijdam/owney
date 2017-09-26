import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from 'app/core/services/auth.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ AuthService ]
})
export class CoreModule {
  // for duplicate instances
  // static forRoot() {
  //   return {
  //     ngModule: CoreModule,
  //     providers: [
  //       AuthService
  //     ]
  //   }
  // }
 }
