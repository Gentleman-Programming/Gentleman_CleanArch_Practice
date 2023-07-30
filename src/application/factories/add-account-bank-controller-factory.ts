import { IController } from "../../infrastructure/contracts/controller";
import { AddAccountBankController } from "../../infrastructure/entry-points/api/add-account-bank-controller";
import { makeBankServiceFactory } from "./bank-service-factory";

export const makeAddAccountBankControllerFactory = (): IController => {
    return new AddAccountBankController(makeBankServiceFactory());
}