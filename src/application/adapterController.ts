import { StatusStates } from "../infrastructure/entry-points/utils";
import { HttpRequest, HttpResponse, IController } from "../infrastructure/contracts/controller";

// Esta clase se encarga de adaptar la respuesta de la capa de aplicacion a la capa de infraestructura
export const adapterController = (controller: IController) => {
    return async (req: HttpRequest, res?: HttpResponse) => {
        const httpResquest = {
            body: req.body
        }

        const httpResponse = await controller.handle(httpResquest);

        if(StatusStates.SUCCESS) {
            httpResponse.status = StatusStates.SUCCESS;
        }

       return httpResponse.status = StatusStates.FAILED;
    }
}