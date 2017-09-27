import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FriendsListComponent } from 'app/friends/friends-list/friends-list.component';
import { CoreModule } from 'app/core/core.module';

const routes: Routes = [
  { path: '', component: FriendsListComponent },
];

@NgModule({
  imports: [
      RouterModule.forChild(routes),
      CoreModule
    ],
    declarations: [FriendsListComponent]
})
export class FriendsModule { }
