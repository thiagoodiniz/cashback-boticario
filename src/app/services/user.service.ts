import { Injectable } from '@angular/core';
import { User } from 'src/core/user.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { httpOptions } from './services-constants';
import { map } from 'rxjs/operators';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private loginSvc: LoginService,
  ) { }

  saveUser(user: User, editing: boolean): Observable<string> {
		if(editing){
			return this.http.put(`${environment.api}/users/${user.id}`, JSON.stringify(user), httpOptions)
			.pipe(
				map((res: User) => {
					return res.id;
				})
			);

		} else {
			return this.http.post(`${environment.api}/users`, JSON.stringify(user), httpOptions)
				.pipe(
          map((res: User) => {
            this.loginSvc.loadAllUsers().subscribe();
						return res.id;
          })
				);
		}

	}
}
