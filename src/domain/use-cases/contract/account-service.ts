import { AccountEntity, AddAccountParams } from "../../entities/account";

// Contrato para comunicar la capa de dominio con la capa de infraestructura
// El cual se inyecta como dependencia en la capa de infraestructura
export interface IAccountService {
    addOne: (account: AddAccountParams) => Promise<AccountEntity | boolean>;
    getOne: (id: string) => Promise<AccountEntity | boolean | unknown>;
}