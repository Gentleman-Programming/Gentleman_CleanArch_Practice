import { AccountEntity, AddAccountParams } from "../account";

// Contrato para comunicar la capa de dominio con la capa de infraestructura
// El cual se inyecta como dependencia en la capa de dominio
export interface IAccountRepository {
    addOne: (account: AddAccountParams) => Promise<AccountEntity>;
    getOne: (id: string) => Promise<AccountEntity | boolean>;
}