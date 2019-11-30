import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseRegisterComponent } from './components/purchase-register/purchase-register.component';

const routeConstant = {
  purchase: {
        create: 'purchase/create',
        edit: 'purchase/edit/:idPurchase',
        routeParam: ':idPurchase',

    }
}

const routes: Routes = [{
  path: routeConstant.purchase.create,
  component: PurchaseRegisterComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
