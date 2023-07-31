import { AccountEntity, AddAccountParams } from "../../domain/entities/account";
import { IAccountRepository } from "../../domain/entities/contract/account-repository";

// Simulamos una base de datos en memoria
// Para este ejemplo no es necesario usar una base de datos
const listOfAccounts = new Map<string, AccountEntity>();

// Esta clase implementa el contrato de la capa de dominio
// En caso de cambiar por una base de datos real, solo es crear una nueva clase que actua 
// como adaptador para que implemente el contrato de la capa de dominio
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