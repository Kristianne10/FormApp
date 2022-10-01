import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormanaTabnavPage } from './formana-tabnav.page';

const routes: Routes = [
  {
    path: '',
    component: FormanaTabnavPage,
    //pathMatch: 'full',


    children: [
      {
        path: 'college-dept',
        loadChildren: () => import('../college-dept/college-dept.module').then( m => m.CollegeDeptPageModule)
      },
      {
        path: 'user-profile',
        loadChildren: () => import('../user-profile/user-profile.module').then( m => m.UserProfilePageModule)
      },
      {
        path: '',
        redirectTo: '/formana-tabnav/college-dept',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/formana-tabnav/college-dept',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormanaTabnavPageRoutingModule {}



