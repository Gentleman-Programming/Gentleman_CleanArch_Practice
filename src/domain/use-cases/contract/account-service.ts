import { AccountEntity, AddAccountParams } from "../../entities/account";

export interface IAccountService {
    addOne: (account: AddAccountParams) => Promise<AccountEntity | boolean>;
    getOne: (id: string) => Promise<AccountEntity | boolean | unknown>;
}