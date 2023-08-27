"use client";
import React from "react";
import Shipment from "./components/shipment/Shipment";
import styles from "./homePage.module.css";
import {ShipmentObj} from "./utils/types";
import {useDispatch} from "react-redux";
import {setFilteredShipments, setShipments} from "./redux/actions/shipmentActions";

interface HomePageProps {
  shipments: ShipmentObj[];
}

const HomePage: React.FC<HomePageProps> = ({shipments}) => {
  const dispatch = useDispatch();
  dispatch(setShipments(shipments));
  dispatch(setFilteredShipments(shipments));
  return (
    <div className={styles.body}>
      <Shipment />
    </div>
  );
};

export default HomePage;
