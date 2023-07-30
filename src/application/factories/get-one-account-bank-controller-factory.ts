import { IController } from "../../infrastructure/contracts/controller";
import { GetOneAccountBankController } from "../../infrastructure/entry-points/api/get-one-account-bank-controller";
import { makeBankServiceFactory } from "./bank-service-factory";

// Factory que actua como contenedor para hacer la inyeccion de dependencias
// En este caso solo se inyecta el caso de uso de la capa del dominio
export const makeGetOneAccountBankControllerFactory = (): IController => {
    return new GetOneAccountBankController(makeBankServiceFactory());
}