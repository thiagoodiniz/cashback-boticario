import { Injectable } from '@angular/core';
import { Purchase } from 'src/core/purchase.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { routeConstant } from '../app-routing.module';

const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json',
	})
};

@Injectable({
	providedIn: 'root'
})
export class PurchaseService {

	private _selectedPurchase: Purchase;

	constructor(
		private http: HttpClient,
		private router: Router,
	) { }

	get selectedPurchase(): Purchase {
		const selectedPurchase = this._selectedPurchase;
		this._selectedPurchase = undefined;
		return selectedPurchase;
	}

	goToEdit(purchase: Purchase) {
		this._selectedPurchase = purchase;
		this.router.navigateByUrl(routeConstant.purchase.edit.replace(routeConstant.purchase.routeParam, purchase.id));
	}

	savePurchase(purchase: Purchase, editing: boolean): Observable<string> {
		if(editing){
			return this.http.put(`${environment.api}/purchases/${purchase.id}`, JSON.stringify(purchase), httpOptions)
			.pipe(
				map((res: Purchase) => {
					return res.id;
				})
			);

		} else {
			return this.http.post(`${environment.api}/purchases`, JSON.stringify(purchase), httpOptions)
				.pipe(
					map((res: Purchase) => {
						return res.id;
					})
				);
		}

	}

	loadPurchase(): Observable<Array<Purchase>> {
		return this.http.get(`${environment.api}/purchases`, httpOptions)
			.pipe(
				map((res: Purchase[]) => {
					res.map(purchase => purchase.date = new Date(purchase.date));
					return res;
				})
			);
		}
}
