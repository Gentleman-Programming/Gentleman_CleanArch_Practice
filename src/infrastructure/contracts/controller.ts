// Contrato para comunicar la capa de infraestructura con la capa de aplicacion
export interface IController {
    handle(request: HttpRequest): Promise<HttpResponse>;
}

export type HttpResponse = {
    status: string
    body: any
}

export type HttpRequest = {
    body?: any
}