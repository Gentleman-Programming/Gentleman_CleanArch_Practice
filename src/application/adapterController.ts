import { IController } from "../infrastructure/contracts/controller";
import { StatusStates } from "../infrastructure/entry-points/utils";

export const adapterController = (controller: IController) => {
    return async (req: any, res?: any) => {
        const httpResquest = {
            body: req.body
        }

        const httpResponse = await controller.handle(httpResquest);

        if(StatusStates.SUCCESS) {
            res.status(httpResponse.status).json(httpResponse.body);
        }

       return res.status(StatusStates.FAILED).json({error: httpResponse.body.message});
    }
}