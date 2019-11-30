import { Injectable } from '@angular/core';
import { Purchase } from 'src/core/purchase.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor(
    private http: HttpClient,
  ) { }

  savePurchase(purchase: Purchase): Observable<string> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.post(`${environment.api}/purchases`, JSON.stringify(purchase), httpOptions)
      .pipe(
        map((res: Purchase) => {
          console.log(res);
          return res.id;
        })
      );
  }
}
