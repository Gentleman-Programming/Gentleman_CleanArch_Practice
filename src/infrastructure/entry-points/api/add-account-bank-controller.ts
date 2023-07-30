import { StatusStates } from "../utils"
import { IAccountService } from "../../../domain/use-cases/contract/account-service";
import { HttpRequest, HttpResponse, IController } from "../../contracts/controller";

export class AddAccountBankController implements IController {
  
  constructor(private readonly accountService: IAccountService) {}

  async handle(request: HttpRequest): Promise<HttpResponse> {
    try {
      await this.accountService.addOne(request.body);
    
      return {
        status: StatusStates.SUCCESS, 
        body: "Crated Bank Account user susccessfully",
      }
    } catch (error) {
      throw new Error(error);
    }
  }
}