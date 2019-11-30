export class CashBack {
    constructor(
        private _percentage: number,
        private _value: number,
        private _id?: string,
        ){ }

        get percentage(): number {
            return this._percentage;
        }

        get value(): number {
            return this._value;
        }

        get id(): string{
            return this._id;
        }
}