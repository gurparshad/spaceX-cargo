import React from "react";
import Search from "../search/Search";
import Image from "next/image";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <Image src="/logo.png" alt="logo" width={180} height={37} />
      <Search />
    </div>
  );
};

export default Header;
