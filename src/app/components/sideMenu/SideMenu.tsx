"use client";
import {ShipmentApi} from "@/app/api";
import {toggleMenuVisibility} from "@/app/redux/actions/menuActions";
import {setFilteredShipments, setShipment, setShipments} from "@/app/redux/actions/shipmentActions";
import Link from "next/link";
import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {ShipmentObj} from "../../utils/types";
import styles from "./sideMenu.module.css";
import {usePathname} from "next/navigation";
import Loading from "../loading/Loading";

const SideMenu: React.FC = () => {
  const shipmentApi = new ShipmentApi();
  const pathname = usePathname();
  const currentShipmentId = pathname.split("/")[2];
  const isMenuVisible = useSelector((state: any) => state.menu.isMenuVisible);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const shipments = await shipmentApi.getShipments();
        dispatch(setFilteredShipments(shipments));
        dispatch(setShipments(shipments));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const dispatch = useDispatch();
  const shipments = useSelector((state: any) => state.shipment?.filteredShipments);

  const handleRowClick = (shipment: ShipmentObj) => {
    dispatch(setShipment(shipment));
    const windowWidth = window.innerWidth;
    if (windowWidth <= 600) {
      dispatch(toggleMenuVisibility());
    }
  };

  return (
    isMenuVisible && (
      <div>
        <div className={styles.sideMenuContainer}>
          <h4 className={styles.title}>SHIPMENT LIST</h4>
          <ul className={styles.sideMenuOptions}>
            {shipments ? (
              shipments.map((shipment: ShipmentObj, index: number) => (
                <Link
                  href={`/shipment/${shipment.id}`}
                  key={index}
                  className={`${styles.listItem} ${shipment.id === currentShipmentId ? styles.activeListItem : ""}`}
                >
                  <li onClick={() => handleRowClick(shipment)}>{shipment.name}</li>
                </Link>
              ))
            ) : (
              <Loading />
            )}
          </ul>
        </div>
      </div>
    )
  );
};

export default SideMenu;
