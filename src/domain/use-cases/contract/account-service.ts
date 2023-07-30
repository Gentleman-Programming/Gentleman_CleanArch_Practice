import { AccountEntity, AddAccountParams } from "../../entities/account";

export interface IAccountService {
    addOne: (account: AddAccountParams) => Promise<AccountEntity>;
    getOne: (id: string) => Promise<AccountEntity | boolean | unknown>;
}