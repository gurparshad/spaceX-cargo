import { ShipmentObj } from "../../utils/types";

export const setShipments = (data: ShipmentObj[]) => ({
  type: 'SET_SHIPMENTS',
  payload: data,
});

export const setFilteredShipments = (data: ShipmentObj[]) => ({
  type: 'SET_FILTERED_SHIPMENTS',
  payload: data,
});

export const setShipment = (data: ShipmentObj) => ({
  type: 'SET_SHIPMENT',
  payload: data,
});