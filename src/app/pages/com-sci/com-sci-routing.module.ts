import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComSciPage } from './com-sci.page';

const routes: Routes = [
  {
    path: '',
    component: ComSciPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComSciPageRoutingModule {}
