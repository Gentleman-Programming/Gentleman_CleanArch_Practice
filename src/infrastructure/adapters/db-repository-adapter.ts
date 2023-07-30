import { AccountEntity } from "../../domain/entities/account";
import { IAccountRepository } from "../../domain/entities/contract/account-repository";

export class DbRepositoryAdapter implements IAccountRepository {

    private listOfAccounts = new Map<string, AccountEntity>();

    async addOne(account: any): Promise<AccountEntity> {
        this.listOfAccounts.set(account.id, account);
        return account;
    }

    async getOne(id: string): Promise<AccountEntity | boolean> {
        const resource = this.listOfAccounts.get(id);
        return resource ? resource : false;
    }
}