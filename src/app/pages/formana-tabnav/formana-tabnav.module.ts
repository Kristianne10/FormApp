import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormanaTabnavPageRoutingModule } from './formana-tabnav-routing.module';

import { FormanaTabnavPage } from './formana-tabnav.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormanaTabnavPageRoutingModule
  ],
  declarations: [FormanaTabnavPage]
})
export class FormanaTabnavPageModule {}
