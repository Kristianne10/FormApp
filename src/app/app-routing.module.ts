import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
/*
  {
    path: 'college-dept',
    loadChildren: () => import('./pages/college-dept/college-dept.module').then( m => m.CollegeDeptPageModule)
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./pages/user-profile/user-profile.module').then( m => m.UserProfilePageModule)
  },
  */
  {
    path: 'formana-tabnav',
    loadChildren: () => import('./pages/formana-tabnav/formana-tabnav.module').then( m => m.FormanaTabnavPageModule)
  },
  {
    path: 'com-sci',
    loadChildren: () => import('./pages/com-sci/com-sci.module').then( m => m.ComSciPageModule)
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
