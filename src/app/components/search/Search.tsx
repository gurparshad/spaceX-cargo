"use client";
import React, {useState} from "react";
import "./search.css";

const Search: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
  };

  return (
    <div>
      <input
        type="text"
        className="custom_input"
        placeholder="Search"
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Search;
