import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ComponentaComponent } from './componenta/componenta.component';
import { DirectivasComponent } from './directivas/directivas.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductComponent
  },
  {
    path: 'componenta',
    component: ComponentaComponent
  },
  {
    path: 'directivas',
    component: DirectivasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
