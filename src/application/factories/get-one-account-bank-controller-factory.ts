import { IController } from "../../infrastructure/contracts/controller";
import { GetOneAccountBankController } from "../../infrastructure/entry-points/api/get-one-account-bank-controller";
import { makeBankServiceFactory } from "./bank-service-factory";

export const makeGetOneAccountBankControllerFactory = (): IController => {
    return new GetOneAccountBankController(makeBankServiceFactory());
}