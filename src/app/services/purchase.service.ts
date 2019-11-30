import { Injectable } from '@angular/core';
import { Purchase } from 'src/core/purchase.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor(
    private http: HttpClient,
  ) { }

  savePurchase(purchase: Purchase): Observable<string> {
    return this.http.post(`${environment.api}/purchases`, JSON.stringify(purchase), httpOptions)
      .pipe(
        map((res: Purchase) => {
          console.log(res);
          return res.id;
        })
      );
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
