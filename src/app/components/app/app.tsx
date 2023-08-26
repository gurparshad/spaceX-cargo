"use client";
import React from "react";
import Shipment from "../shipment/Shipment";
import styles from "./app.module.css";
import {ShipmentObj} from "../../utils/types";
import {setShipments} from "../../redux/actions/shipmentActions";
import {useDispatch} from "react-redux";

interface AppProps {
  shipments: ShipmentObj[];
}

const App: React.FC<AppProps> = ({shipments}) => {
  const dispatch = useDispatch();
  dispatch(setShipments(shipments));
  return (
    <div>
      <div className={styles.body}>
        <div className={styles.content}>
          <Shipment />
        </div>
      </div>
    </div>
  );
};

export default App;
