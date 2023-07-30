import { IAccountService } from "../contract/account-service";
import { AccountEntity, AddAccountParams } from "../../entities/account";
import { IAccountRepository } from "../../entities/contract/account-repository";

export class BankServiceImpl implements IAccountService {
    
    constructor(private readonly accountRepository: IAccountRepository) {}


    async addOne(account: AddAccountParams): Promise<AccountEntity> {
        return await this.accountRepository.addOne(account);
    }

    async getOne (id: string): Promise<AccountEntity | boolean> {
        const resource = await this.accountRepository.getOne(id);
        return resource ?? false;
    }
}