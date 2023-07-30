import { StatusStates } from "../utils";
import { IAccountService } from "../../../domain/use-cases/contract/account-service";
import { HttpRequest, HttpResponse, IController } from "../../contracts/controller";

export class GetOneAccountBankController implements IController {

    constructor(private readonly accountService: IAccountService) {}

    async handle(request: HttpRequest): Promise<HttpResponse> {
        try {
            const { id } = request.body;   
             
            const result = await this.accountService.getOne(id);

            if (!result) throw new Error("Account not found");
            

            return {
                status: StatusStates.SUCCESS, 
                body: "Bank Account user found",
            }
        } catch (error) {
            throw new Error(error);
        }
    }      
}