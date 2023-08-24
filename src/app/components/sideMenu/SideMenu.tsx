"use client";
import {toggleMenuVisibility} from "@/app/redux/actions/menuActions";
import {setShipment} from "@/app/redux/actions/shipmentActions";
import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {ShipmentObj} from "../../utils/types";
import styles from "./sideMenu.module.css";

const SideMenu: React.FC = () => {
  const dispatch = useDispatch();
  const shipments = useSelector((state: any) => state.shipment?.filteredShipments);

  const handleRowClick = (shipment: ShipmentObj) => {
    dispatch(setShipment(shipment));
    dispatch(toggleMenuVisibility());
  };

  return (
    <div className={styles.sideMenuContainer}>
      <h4 className={styles.title}>SHIPMENT LIST</h4>
      <ul className={styles.sideMenuOptions}>
        {shipments?.map((shipment: ShipmentObj, index: number) => (
          <li onClick={() => handleRowClick(shipment)} key={index}>
            {shipment.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;
