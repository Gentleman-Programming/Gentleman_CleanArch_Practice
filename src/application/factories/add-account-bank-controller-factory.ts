import { IController } from "../../infrastructure/contracts/controller";
import { AddAccountBankController } from "../../infrastructure/entry-points/api/add-account-bank-controller";
import { makeBankServiceFactory } from "./bank-service-factory";

// Factory que actua como contenedor para hacer la inyeccion de dependencias
// En este caso solo se inyecta el caso de uso de la capa del dominio
export const makeAddAccountBankControllerFactory = (): IController => {
    return new AddAccountBankController(makeBankServiceFactory());
}