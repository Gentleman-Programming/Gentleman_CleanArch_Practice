import { AccountEntity, AddAccountParams } from "../../domain/entities/account";
import { IAccountRepository } from "../../domain/entities/contract/account-repository";

const listOfAccounts = new Map<string, AccountEntity>();

export class DbRepositoryAdapter implements IAccountRepository {

    async addOne(account: AddAccountParams): Promise<AccountEntity> {
        let idCounter = 0;
        idCounter++;
        const idx = idCounter.toString();
        const mockResource: AccountEntity = {
            id: idx,
            name: account.name,
            lastName: account.lastName,
            age: account.age,
        }
        console.log("Logger Repository", account)
        listOfAccounts.set(idx, mockResource);
        console.log("Logger Map after adding", listOfAccounts);

        return mockResource;
    }

    async getOne(id: string): Promise<AccountEntity | boolean> {
        console.log("Logger Repository Get One", id);
        const resource = listOfAccounts.get(id);
        console.log("Logger Map after getting", resource);
        return resource ? resource : false;
    }
}