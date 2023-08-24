"use client";
import React, {useState} from "react";
import Header from "../header/Header";
import Shipment from "../shipment/Shipment";
import SideMenu from "../sideMenu/SideMenu";
import styles from "./app.module.css";
import {ShipmentObj} from "../../utils/types";
import {setShipments} from "../../redux/actions/shipmentActions";
import {useDispatch, useSelector} from "react-redux";
import Image from "next/image";
import hamburgerIcon from "../../../assets/hamburger.svg";
import crossIcon from "../../../assets/cross.svg";
import {toggleMenuVisibility} from "@/app/redux/actions/menuActions";

interface AppProps {
  shipments: ShipmentObj[];
}

const App: React.FC<AppProps> = ({shipments}) => {
  const isMenuVisible = useSelector((state: any) => state.menu.isMenuVisible);
  const handleMenuOpen = () => {
    dispatch(toggleMenuVisibility());
  };
  const dispatch = useDispatch();
  dispatch(setShipments(shipments));
  return (
    <div className={styles.header}>
      <Header />
      {isMenuVisible ? (
        <Image
          src={crossIcon}
          alt="crossIcon"
          width={50}
          height={37}
          className={styles.crossIcon}
          onClick={() => handleMenuOpen()}
        />
      ) : (
        <Image
          src={hamburgerIcon}
          alt="hamburgerIcon"
          width={50}
          height={37}
          className={styles.menuIcon}
          onClick={() => handleMenuOpen()}
        />
      )}

      <div className={styles.body}>
        {isMenuVisible && <SideMenu />}
        <div className={styles.content}>
          <Shipment />
        </div>
      </div>
    </div>
  );
};

export default App;
