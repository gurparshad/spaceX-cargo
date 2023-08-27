"use client";
import React from "react";
import Search from "../search/Search";
import styles from "./header.module.css";
import {useDispatch, useSelector} from "react-redux";
import Image from "next/image";
import hamburgerIcon from "../../../assets/hamburger.svg";
import crossIcon from "../../../assets/cross.svg";
import {toggleMenuVisibility} from "@/app/redux/actions/menuActions";
import Link from "next/link";

const Header = () => {
  const dispatch = useDispatch();
  const isMenuVisible = useSelector((state: any) => state.menu.isMenuVisible);
  const handleMenuOpen = () => {
    dispatch(toggleMenuVisibility());
  };

  return (
    <div className={styles.header}>
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
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={180} height={37} />
      </Link>
      <Search />
    </div>
  );
};

export default Header;
