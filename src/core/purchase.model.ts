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
        private _status: EPurchaseStatus = EPurchaseStatus.inValidation,
        private _id?: string,
    ){ }

    static getNew(): Purchase{
        return new Purchase(
            '',
            undefined,
            new Date(),
            undefined,
        );
    }

    get code(): string {
        return this._code;
    }

    set code(code: string) {
        this._code = code;
    }

    get value(): number {
        return this._value;
    }

    set value(value: number) {
        this._value = value;
    }

    get date(): Date {
        return this._date;
    }

    set date(date: Date) {
        this._date = date;
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