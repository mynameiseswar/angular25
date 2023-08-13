import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'/home',
    pathMatch: 'full'

  },
  {
    path: 'home',
    loadChildren: ()=> import('./pages/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./pages/about-us/about-us.module').then((m)=> m.AboutUsModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then((m)=>m.LoginModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./pages/product/product.module').then((m)=> m.ProductModule)
  },
  {
    path: '**',
    component: PagenotfoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
