import { AccountEntity, AddAccountParams } from "../account";

export interface IAccountRepository {
    addOne: (account: AddAccountParams) => Promise<AccountEntity>;
    getOne: (id: string) => Promise<AccountEntity | boolean>;
}