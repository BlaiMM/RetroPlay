import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VentajocPageRoutingModule } from './ventajoc-routing.module';

import { VentajocPage } from './ventajoc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VentajocPageRoutingModule
  ],
  declarations: [VentajocPage]
})
export class VentajocPageModule {}
