import { StatusStates } from "./utils"
import { AccountEntity, AddAccountParams } from "../../domain/entities/account";
import { IAccountService } from "../../domain/use-cases/contract/account-service";

export class Api {
  
  constructor(private readonly accountService: IAccountService) {}

  async addOne(account: AddAccountParams): Promise<AccountEntity | unknown> {
    this.accountService.addOne(account);
    return {
      status: StatusStates.SUCCESS, 
      message: "Crated Bank Account user susccessfully",
    }
  }

  async getOne(id: string): Promise<AccountEntity | boolean | unknown> {
    const result = this.accountService.getOne(id);
    if (!result) {
      throw new Error("Account not found");
    }

    return {
      status: StatusStates.SUCCESS, 
      message: "Bank Account user found",
    }
  }
}