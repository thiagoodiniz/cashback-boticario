import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseRegisterComponent } from './components/purchase-register/purchase-register.component';
import { PurchaseListComponent } from './components/purchase-list/purchase-list.component';
import { LoginComponent } from './security/login/login.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { routeConstant } from './services/services-constants';
import { LoggedInGuard } from './security/loggedin.guard';

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
    canActivate: [LoggedInGuard],
  },
  {
    path: routeConstant.purchase.create,
    component: PurchaseRegisterComponent,
    canActivate: [LoggedInGuard],
  },
  {
    path: routeConstant.purchase.edit,
    component: PurchaseRegisterComponent,
    canActivate: [LoggedInGuard],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
