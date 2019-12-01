import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/core/user.model';
import { Router } from '@angular/router';
import { routeConstant } from 'src/app/services/services-constants';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


	constructor(
		private loginSvc: LoginService,
		private router: Router,
	) { }

	ngOnInit() {
	}

	get loggedUser(): User {
		return this.loginSvc.loggedUser;
	}

	logout(): void {
		this.loginSvc.logOut();
	}

	systemInfo(): void {
		this.router.navigateByUrl(routeConstant.systemInfo);
	}


}
