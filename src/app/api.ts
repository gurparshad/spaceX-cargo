import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

export class ShipmentApi {
  private client: AxiosInstance;

  private routes = {
    GET_SHIPMENTS: "/shipments.json",
  };

  private handleRequest = async (request: Promise<AxiosResponse<any>>) =>
    request.then(this.handleResult).catch(this.handleError);

  private handleError(err: AxiosError) {
    //@ts-ignore
    throw new Error(err.response.data.message);
  }

  private handleResult(res: AxiosResponse) {
    return res.data;
  }

  constructor() {
    this.client = axios.create({
      baseURL: process.env.REACT_APP_API_BASE_URL,
    });
  }

  public getShipments = async () => {
    return await this.handleRequest(
      this.client.get(this.routes.GET_SHIPMENTS)
    );
  }
}