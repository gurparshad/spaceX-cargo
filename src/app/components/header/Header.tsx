import React from "react";
import Search from "../search/Search";
import Image from "next/image";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <Image src="/logo.png" alt="logo" width={180} height={37} />
      <Search />
    </div>
  );
};

export default Header;
