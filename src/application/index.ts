import { adapterController } from "./adapterController";
import { makeAddAccountBankControllerFactory } from "./factories/add-account-bank-controller-factory";
import { makeGetOneAccountBankControllerFactory } from "./factories/get-one-account-bank-controller-factory";

const add = adapterController(makeAddAccountBankControllerFactory());
const getOne = adapterController(makeGetOneAccountBankControllerFactory());

add({
    body: {
        name: "Teste",
        lastName: "Teste",
        age: 17
    }
});

getOne({
    body: {
        id: "1"
    }
});
