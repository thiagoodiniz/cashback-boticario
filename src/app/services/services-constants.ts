import { HttpHeaders } from "@angular/common/http";

export const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json',
	})
};

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
  