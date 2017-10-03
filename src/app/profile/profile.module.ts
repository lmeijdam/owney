import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { CoreModule } from 'app/core/core.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ProfileComponent },
];

@NgModule({
  imports: [
      RouterModule.forChild(routes),
      CoreModule,
      ReactiveFormsModule
    ],
    declarations: [ProfileComponent]
})
export class ProfileModule { }
