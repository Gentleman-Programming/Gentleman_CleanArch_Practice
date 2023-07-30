import { IAccountService } from "../../domain/use-cases/contract/account-service";
import { BankServiceImpl } from "../../domain/use-cases/impl/bank-service-imp";
import { DbRepositoryAdapter } from "../../infrastructure/adapters/db-repository-adapter";

export const makeBankServiceFactory = (): IAccountService => {
    const accountRepository = new DbRepositoryAdapter();
    return new BankServiceImpl(accountRepository);
}
