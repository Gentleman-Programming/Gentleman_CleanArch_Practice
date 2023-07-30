import { StatusStates } from "../utils"
import { IAccountService } from "../../../domain/use-cases/contract/account-service";
import { HttpRequest, HttpResponse, IController } from "../../contracts/controller";

export class AddAccountBankController implements IController {
  
  constructor(private readonly accountService: IAccountService) {}

  async handle(request: HttpRequest): Promise<HttpResponse> {
    console.log("Looger Controller Add Account Bank Controller", request.body);
    try {
      const result = await this.accountService.addOne(request.body);

      if (!result){ 
        console.log("Logger Controller Account after return service", new Error("Account failed"))
        throw new Error("Account failed");
    }

      console.log("Logger Controller Account after return service", {
        status: StatusStates.SUCCESS, 
        body: "Crated Bank Account user susccessfully",
      });

      return {
        status: StatusStates.SUCCESS, 
        body: "Crated Bank Account user susccessfully",
      }
    } catch (error) {
      throw new Error(error);
    }
  }
}