import { StatusStates } from "../utils";
import { IAccountService } from "../../../domain/use-cases/contract/account-service";
import { HttpRequest, HttpResponse, IController } from "../../contracts/controller";

export class GetOneAccountBankController implements IController {

    constructor(private readonly accountService: IAccountService) {}

    async handle(request: HttpRequest): Promise<HttpResponse> {
        console.log("Looger Controller Get One Account Controller", request);
        try {
            const { id } = request.body;   
             
            const result = await this.accountService.getOne(id);
            console.log("Logger Controller Get One Account after return service", result);

            if (!result){ 
                console.log("Logger Controller Get One Account after return service", new Error("Account not found"))
                throw new Error("Account not found");
            }
            
            console.log("Logger Controller Get One Account result", {
                status: StatusStates.SUCCESS, 
                body: "Bank Account user found",
            });

            return {
                status: StatusStates.SUCCESS, 
                body: "Bank Account user found",
            }
        } catch (error) {
            throw new Error(error);
        }
    }      
}