import { Component, OnInit } from '@angular/core';
import { Purchase, EPurchaseStatus } from 'src/core/purchase.model';
import { PurchaseService } from 'src/app/services/purchase.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-purchase-register',
	templateUrl: './purchase-register.component.html',
	styleUrls: ['./purchase-register.component.scss']
})
export class PurchaseRegisterComponent implements OnInit {

	private _purchase: Purchase;

	purchaseForm: FormGroup;
	constructor(
		private purchaseSvc: PurchaseService,
		private formBuilder: FormBuilder,
		private router: Router,
	) { 
		this._purchase = {
			code: undefined,
			value: undefined,
			date: new Date(),
			status: EPurchaseStatus.inValidation,
		}
	}

	ngOnInit() {
		this.purchaseForm = this.formBuilder.group({
			code: this.formBuilder.control(this._purchase.code, [Validators.required]),
			value: this.formBuilder.control(this._purchase.value, [Validators.required, Validators.pattern(/^[0-9]*$/)]),
			date: this.formBuilder.control(this._purchase.date, [Validators.required]),
		})
	}

	async save(){
		this._purchase.code = this.purchaseForm.get('code').value;
		this._purchase.value = this.purchaseForm.get('value').value;
		this._purchase.date = this.purchaseForm.get('date').value;

		this.purchaseSvc.savePurchase(this._purchase).subscribe(id => {
			console.log('id:', id);
			this.router.navigateByUrl('purchase/list');
		});
	}

}
