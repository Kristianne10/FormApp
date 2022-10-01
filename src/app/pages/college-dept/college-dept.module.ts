import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CollegeDeptPageRoutingModule } from './college-dept-routing.module';

import { CollegeDeptPage } from './college-dept.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CollegeDeptPageRoutingModule
  ],
  declarations: [CollegeDeptPage]
})
export class CollegeDeptPageModule {}
