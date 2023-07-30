import { IAccountService } from "../contract/account-service";
import { AccountEntity, AddAccountParams } from "../../entities/account";
import { IAccountRepository } from "../../entities/contract/account-repository";

export class BankServiceImpl implements IAccountService {
    
    constructor(private readonly accountRepository: IAccountRepository) {}

    async addOne(account: AddAccountParams): Promise<AccountEntity | boolean> {
        
        if(account.age < 18){ 
            console.log("Logger Service Add Account validate business rule", false);
            return false;
        }

        console.log("Logger Service Add Account", account);
        return await this.accountRepository.addOne(account);
    }

    async getOne (id: string): Promise<AccountEntity | boolean> {
        console.log("Logger Service Get One Account", id);

        const resource = await this.accountRepository.getOne(id);
        console.log("Logger Service after Get One Account", resource);

        return resource ?? false;
    }
}