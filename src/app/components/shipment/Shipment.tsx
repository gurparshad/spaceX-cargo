"use client";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import styles from "./shipment.module.css";

const Shipment: React.FC = () => {
  const [cargoBoxes, setCargoBoxes] = useState<string>("");
  const shipment = useSelector((state: any) => state.shipment.shipment);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCargoBoxes(e.target.value);
  };

  const calculateCargoBays = () => {
    const numbers: number[] = cargoBoxes.split(",").map((str) => parseFloat(str.trim()));
    const numbersSum = numbers.reduce((acc, num) => acc + num, 0);
    return Math.ceil(numbersSum / 10);
  };

  useEffect(() => {
    if (shipment && shipment.boxes) {
      setCargoBoxes(shipment.boxes);
    }
  }, [shipment]);

  return (
    <div className={styles.shipment}>
      {shipment ? (
        <div>
          <h1 className={styles.name}>{shipment.name}</h1>
          <p className={styles.email}>{shipment.email}</p>
          <div className={styles.cargoBoxesContainer}>
            <label className={styles.cargoBoxes} htmlFor="cargo-boxes">
              CARGO BOXES
            </label>
            <input
              className={styles.cargoBoxesInput}
              type="text"
              id="cargo-boxes"
              onChange={onChangeHandler}
              value={cargoBoxes}
            />
          </div>
          <div className={styles.requiredBaysContainer}>
            <h2 className={styles.requiredBaysTitle}>Number of required cargo bays</h2>
            <h1 className={styles.requiredBaysAmount}>{calculateCargoBays()}</h1>
          </div>
        </div>
      ) : (
        <div>
          <h1 className={styles.info}>Details of shipment will appear here</h1>
        </div>
      )}
    </div>
  );
};

export default Shipment;
