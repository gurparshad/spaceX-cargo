"use client";
import React from "react";
import {ShipmentObj} from "../../utils/types";
import "./sideMenu.css";

interface SideMenuProps {
  shipments: ShipmentObj[];
}

const SideMenu: React.FC<SideMenuProps> = ({shipments}) => {
  const shipmentNames = shipments.map((shipment: ShipmentObj) => shipment.name);
  return (
    <div className="sideMenuContainer">
      <h3>SHIPMENT LIST</h3>
      <ul className="sideMenuOptions">
        {shipmentNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;
