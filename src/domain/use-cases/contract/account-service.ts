import { AccountEntity } from "../../entities/account";

export interface IAccountService {
    addOne: (account: AccountEntity) => Promise<AccountEntity>;
    getOne: (id: string) => Promise<AccountEntity>;
}