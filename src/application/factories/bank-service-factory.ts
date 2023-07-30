import { IAccountService } from "../../domain/use-cases/contract/account-service";
import { BankServiceImpl } from "../../domain/use-cases/impl/bank-service-imp";
import { DbRepositoryAdapter } from "../../infrastructure/adapters/db-repository-adapter";

// Factory que actua como contenedor para hacer la inyeccion de dependencias
// En este caso solo se inyecta el adaptador de la capa de infraestructura
export const makeBankServiceFactory = (): IAccountService => {
    const accountRepository = new DbRepositoryAdapter();
    return new BankServiceImpl(accountRepository);
}
