"use client";
import React, {useState} from "react";
import "./shipment.css";

const Shipment: React.FC = () => {
  const [cargoBoxes, setCargoBoxes] = useState<string>("");
  // get cargoBoxes from the API

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setCargoBoxes(e.target.value);
  };

  const calculateCargoBays = () => {
    return 0;
    // const numbers: number[] = cargoBoxes.split(",").map((str) => parseFloat(str.trim()));
    // const numbersSum = numbers.reduce((acc, num) => acc + num, 0);
    // return numbersSum / 10;
  };

  return (
    <div className="shipment">
      <h1>Amazon</h1>
      <p>contact@amazon.com</p>
      <div>
        <label htmlFor="cargo-boxes">CARGO BOXES</label>
        <input type="text" id="cargo-boxes" onChange={onChangeHandler} value={cargoBoxes} />
      </div>
      <h1>Number of required cargo bays</h1>
      <h1>{calculateCargoBays()}</h1>
    </div>
  );
};

export default Shipment;
