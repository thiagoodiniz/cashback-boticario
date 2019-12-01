import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { PurchaseService } from 'src/app/services/purchase.service';
import { Purchase } from 'src/core/purchase.model';

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	selector: 'app-purchase-list',
	templateUrl: './purchase-list.component.html',
	styleUrls: ['./purchase-list.component.scss']
})
export class PurchaseListComponent implements OnInit {

	purchaseList: Purchase[];

	displayedColumns = ['code', 'value', 'date', 'actions'];

	constructor(
		private purchaseSvc: PurchaseService,
		private cdr: ChangeDetectorRef,
	) { }

	ngOnInit() {
		this.loadPuchaces();
	}

	getDateFormated(date: Date): string {
		return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
	}

	goToEditPurchase(purchase: Purchase): void {
		this.purchaseSvc.goToEdit(purchase);
	}

	removePurchase(purchaseID: string): void {
		this.purchaseSvc.removePurchase(purchaseID).subscribe(() => {
			this.loadPuchaces();
		})
	}

	loadPuchaces(): void {
		this.purchaseSvc.loadPurchase().subscribe((purchaseList) => {
			this.purchaseList = purchaseList;
			this.cdr.markForCheck();
		});
	}

}
