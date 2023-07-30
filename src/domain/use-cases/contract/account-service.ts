import { AccountEntity } from "../../entities/account";

export interface IAccountService {
    addOne: (account: AccountEntity | unknown) => Promise<AccountEntity>;
    getOne: (id: string) => Promise<AccountEntity | boolean | unknown>;
}