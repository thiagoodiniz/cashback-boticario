import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { routeConstant } from '../../services/services-constants';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	loginForm: FormGroup;
	loginError: boolean = false;

	constructor(
		private formBuilder: FormBuilder,
		private loginSvc: LoginService,
		private router: Router,
	) { }

	ngOnInit() {
		this.loginForm = this.formBuilder.group({
			user: this.formBuilder.control('', [Validators.required]),
			password: this.formBuilder.control('', [Validators.required]),
		})
	}

	register(): void {
		this.router.navigateByUrl(routeConstant.userRegister);
	}

	login(): void {
		const email = this.loginForm.get('user').value;
		const password = this.loginForm.get('password').value;
		if(this.loginSvc.login(email, password)){
			this.router.navigateByUrl('HOME')
		} else {
			this.loginError = true;
		}
	}

}
