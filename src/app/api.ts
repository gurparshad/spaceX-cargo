import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { ShipmentObj } from "./utils/types";

export class ShipmentApi {
  private client: AxiosInstance;
  private shipments: ShipmentObj[];

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
    this.shipments = []
  }

  public getShipments = async () => {
    this.shipments = await this.handleRequest(
      this.client.get(this.routes.GET_SHIPMENTS)
    );
    return this.shipments;
  }

  public getShipment = async (id: string) => {
    if (this.shipments.length > 0) {
      const shipment = this.shipments.find((shipment: ShipmentObj) => shipment.id === id);
      return shipment;
    } else {
      const fetchedShipments = await this.getShipments();
      const shipment = fetchedShipments.find((shipment: ShipmentObj) => shipment.id === id);
      return shipment;
    }
  }

}
