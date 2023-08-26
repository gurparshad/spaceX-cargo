import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { ShipmentObj } from "./utils/types";

export class ShipmentApi {
  private client: AxiosInstance;

  private routes = {
    GET_SHIPMENTS: "/shipments.json",
  };

  private handleRequest = async (request: Promise<AxiosResponse<any>>) =>
    request.then(this.handleResult).catch(this.handleError);

  private handleError(err: AxiosError) {
    //@ts-ignore
    throw new Error(err?.response?.data?.message);
  }

  private handleResult(res: AxiosResponse) {
    return res.data;
  }

  constructor() {
    this.client = axios.create({
      baseURL: process.env.API_BASE_URL,
    });
  }

  public getShipments = async () => {
    return await this.handleRequest(
      this.client.get(this.routes.GET_SHIPMENTS)
    );
  }

  public getShipment = async (id: string) => {
    const shipments = await this.getShipments();
    const shipment = shipments.find((shipment: ShipmentObj) => shipment.id === id);
    return shipment;
  }

}
