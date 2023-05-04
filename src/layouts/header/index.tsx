import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/images/eShop.png";
import cart from "../../assets/images/cart.png";

//components
import SearchForm from "../../components/search_form";

// styles
import s from "./index.module.scss";
const Header = () => {
  return (
    <>
      <div className={s.header}>
        <div className={s.header__container}>
          <div><Link href="/"><Image src={logo} alt="logo" /></Link></div>
          <SearchForm />
          <div className={s.header__menu}>
            <Link href="/products">Каталог</Link>
            <Link href="/products/1">Product</Link>
          </div>
          <Link href="/cart"><Image src={cart} alt="cart" /></Link>
        </div>
      </div>
    </>
  );
};

export default Header;
