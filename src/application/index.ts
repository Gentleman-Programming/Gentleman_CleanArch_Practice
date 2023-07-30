import { adapterController } from "./adapterController";
import { makeAddAccountBankControllerFactory } from "./factories/add-account-bank-controller-factory";
import { makeGetOneAccountBankControllerFactory } from "./factories/get-one-account-bank-controller-factory";

// Arrancamos la aplicacion creando las instancias para probar el funcionamiento
const add = adapterController(makeAddAccountBankControllerFactory());
const getOne = adapterController(makeGetOneAccountBankControllerFactory());

add({
    body: {
        name: "Teste",
        lastName: "Teste",
        age: 18
    }
});

// Se prueba los casos donde falla la validacion, ya que como regla de negocio debe de ser mayor de 18 años
// add({
//     body: {
//         name: "Teste",
//         lastName: "Teste",
//         age: 17
//     }
// });

getOne({
    body: {
        id: "1"
    }
});
