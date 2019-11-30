import { getUniqueID } from 'src/helpers/code-generator.helper';
import { CashBack } from './cashback.model';

export enum EPurchaseStatus {
    inValidation = "Em validação",
    approved = "Aprovado",
    disapproved = "Desaprovado",
}

export class Purchase {
    private _cashBack: CashBack;

    constructor(
        private _code: string,
        private _value: number,
        private _date: Date,
        private _idUser: string,
        private _id: string = getUniqueID(10),
        private _status: EPurchaseStatus = EPurchaseStatus.inValidation,
    ){ }

    get code(): string {
        return this._code;
    }

    get value(): number {
        return this._value;
    }

    get date(): Date {
        return this._date;
    }

    set cashBack(cashBack: CashBack) {
        this._cashBack = cashBack;
    }

    get cashBack(): CashBack {
        return this._cashBack;
    }

    get id(): string{
        return this._id;
    }

    get idUser(): string {
        return this._idUser;
    }

    get status(): EPurchaseStatus {
        return this._status;
    }

    set status(status: EPurchaseStatus) {
        this._status = status;
    }

}