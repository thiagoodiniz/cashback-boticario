import { CashBack } from './cashback.model';

export enum EPurchaseStatus {
    inValidation = "Em validação",
    approved = "Aprovado",
    disapproved = "Desaprovado",
}

export interface Purchase {
    code: string,
    value: number,
    date: Date,
    status: EPurchaseStatus,
    idUser?: string,
    id?: string,
    cashBack?: CashBack;
}
