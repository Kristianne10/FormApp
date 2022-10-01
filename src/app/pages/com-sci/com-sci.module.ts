import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComSciPageRoutingModule } from './com-sci-routing.module';

import { ComSciPage } from './com-sci.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComSciPageRoutingModule
  ],
  declarations: [ComSciPage]
})
export class ComSciPageModule {}
