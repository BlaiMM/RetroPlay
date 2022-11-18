import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VentajocPage } from './ventajoc.page';

const routes: Routes = [
  {
    path: '',
    component: VentajocPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VentajocPageRoutingModule {}
