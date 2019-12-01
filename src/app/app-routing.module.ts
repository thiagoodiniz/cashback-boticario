import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseRegisterComponent } from './components/purchase-register/purchase-register.component';
import { PurchaseListComponent } from './components/purchase-list/purchase-list.component';
import { LoginComponent } from './login/login.component';
import { UserRegisterComponent } from './user-register/user-register.component';

export const routeConstant = {
  login: 'login',
  userRegister: 'register',
  purchase: {
      list: 'purchase/list',
      create: 'purchase/create',
      edit: 'purchase/edit/:idPurchase',
      routeParam: ':idPurchase',
  },
}

const routes: Routes = [
  {
    path: routeConstant.login,
    component: LoginComponent,
  },
  {
    path: routeConstant.userRegister,
    component: UserRegisterComponent,
  },
  {
    path: routeConstant.purchase.list,
    component: PurchaseListComponent,
  },
  {
    path: routeConstant.purchase.create,
    component: PurchaseRegisterComponent,
  },
  {
    path: routeConstant.purchase.edit,
    component: PurchaseRegisterComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
