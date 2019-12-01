import { Injectable } from '@angular/core';
import { User } from 'src/core/user.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { httpOptions } from './services-constants';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class LoginService {

	private user: User;
	private allUsers: User[];

	constructor(
		private http: HttpClient,
		private router: Router,
	) { 
		this.getAllUsers().subscribe((users: User[]) => this.allUsers = users);
	}

	private getAllUsers(): Observable<User[]> {
		return this.http.get(`${environment.api}/users`, httpOptions)
		.pipe(
			map((res: User[]) => {
				return res;
			})
		);
	}

	login(email: string, password: string): boolean {
		const user = this.allUsers.find(user => user.email === email);
		if(user !== undefined && user.password === password){
			this.user = user;
			return true;
		} else {
			return false;
		}
	}

	isLoggedIn(): boolean {
		return this.user !== undefined;
	}

	get loggedUser(): User {
		return this.user;
	}

	logOut(): void {
		this.user = undefined;
		this.router.navigateByUrl('');
	}
	
}
