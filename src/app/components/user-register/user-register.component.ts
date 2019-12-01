import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/core/user.model';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { routeConstant } from 'src/app/services/services-constants';

@Component({
	selector: 'app-user-register',
	templateUrl: './user-register.component.html',
	styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

	userRegistrationForm: FormGroup;
	private editing: boolean = false;

	constructor(
		private formBuilder: FormBuilder,
		private userSvc: UserService,
		private router: Router,
	) { }

	ngOnInit() {
		this.userRegistrationForm = this.formBuilder.group({
			name: this.formBuilder.control('', [Validators.required]),
			cpf: this.formBuilder.control('', [Validators.required]),
			email: this.formBuilder.control('', [Validators.required]),
			password: this.formBuilder.control('', [Validators.required]),
			confirmPassword: this.formBuilder.control('', [Validators.required]),
		});
	}

	register(): void {
		const user: User = {
			name: this.userRegistrationForm.get('name').value,
			cpf: this.userRegistrationForm.get('cpf').value,
			email: this.userRegistrationForm.get('email').value,
			password: this.userRegistrationForm.get('password').value,
		}

		this.userSvc.saveUser(user, this.editing).subscribe(() => {
			this.router.navigateByUrl(routeConstant.login);
		});
	}

}
