import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/core/user.model';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	loginForm: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
	) { }

	ngOnInit() {
		this.loginForm = this.formBuilder.group({
			user: this.formBuilder.control('', [Validators.required]),
			password: this.formBuilder.control('', [Validators.required]),
		})
	}

	login(): void {
		const user: User = {
			email: this.loginForm.get('user').value,
			password: this.loginForm.get('password').value,
		};

		// LOGIN
	}

}
