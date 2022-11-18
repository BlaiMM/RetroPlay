import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'venta',
    loadChildren: () => import('./venta/venta.module').then( m => m.VentaPageModule)
  },  {
    path: 'ventaconsola',
    loadChildren: () => import('./ventaconsola/ventaconsola.module').then( m => m.VentaconsolaPageModule)
  },
  {
    path: 'ventajoc',
    loadChildren: () => import('./ventajoc/ventajoc.module').then( m => m.VentajocPageModule)
  }

 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
