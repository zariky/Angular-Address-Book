import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserListSkeletonComponent } from './components/user-list-skeleton/user-list-skeleton.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: UserListComponent,
  },
  {
    path: ':id/details',
    component: UserDetailsComponent,
  },
  {
    path: '**',
    redirectTo: 'list',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
