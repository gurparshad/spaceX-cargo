import {toggleMenuVisibility} from "@/app/redux/actions/menuActions";
import {ShipmentObj} from "@/app/utils/types";
import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setFilteredShipments} from "../../redux/actions/shipmentActions";
import styles from "./search.module.css";

const Search: React.FC = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const dispatch = useDispatch();
  const shipments = useSelector((state: any) => state.shipment.shipments);
  const isMenuVisible = useSelector((state: any) => state.menu.isMenuVisible);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
    if (!isMenuVisible) {
      dispatch(toggleMenuVisibility());
    }
  };

  useEffect(() => {
    const filteredShipments = shipments.filter((shipment: ShipmentObj) =>
      shipment.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    if (searchInput === "") {
      dispatch(setFilteredShipments(shipments));
    } else {
      dispatch(setFilteredShipments(filteredShipments));
    }
  }, [searchInput, shipments, dispatch]);

  return (
    <div>
      <input
        type="text"
        className={styles.customInput}
        placeholder="Search"
        value={searchInput}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Search;
