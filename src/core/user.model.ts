import { getUniqueID } from 'src/helpers/code-generator.helper';

export class User {
    constructor(
        private _name: string,
        private _cpf: string,
        private _email: string,
        private _password: string,
        private _id: string = getUniqueID(10),
    ){ }

    get name(): string{
        return this._name;
    }
    
    get cpf(): string{
        return this._cpf;
    }
    
    get email(): string{
        return this._email;
    }

    get id(): string{
        return this._id;
    }
    
}