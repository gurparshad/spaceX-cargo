import { ShipmentObj } from "@/app/utils/types";

interface ShipmentAction {
  type: string;
  payload: any;
}

interface ShipmentState {
  shipments: ShipmentObj[];
}

const initialState: ShipmentState = {
  shipments: [],
};

const shipmentReducer = (state = initialState, action: ShipmentAction) => {
  switch (action.type) {
    case 'SET_SHIPMENTS':
      return { ...state, shipments: action.payload };
    case 'SET_FILTERED_SHIPMENTS':
      return { ...state, filteredShipments: action.payload };
    case 'SET_SHIPMENT':
      return { ...state, shipment: action.payload };

    default:
      return state;
  }
};

export default shipmentReducer;