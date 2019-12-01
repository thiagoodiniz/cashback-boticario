import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/core/user.model';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


	constructor(
		private loginSvc: LoginService,
	) { }

	ngOnInit() {
	}

	get loggedUser(): User {
		return this.loginSvc.loggedUser;
	}


}
