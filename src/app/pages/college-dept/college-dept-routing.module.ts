import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollegeDeptPage } from './college-dept.page';

const routes: Routes = [
  {
    path: '',
    component: CollegeDeptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollegeDeptPageRoutingModule {}
