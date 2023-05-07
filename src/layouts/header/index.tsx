import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/images/eShop.png";
import cart from "../../assets/images/cart.png";
import { useRouter } from 'next/router';

//components
import SearchForm from "../../components/search_form";

// styles
import s from "./index.module.scss";
const Header = () => {
  const router = useRouter();
  const { pathname } = router;
  return (
    <>
      <header className={s.header}>
        <div className={s.header__container}>
          <div><Link href="/"><Image src={logo} alt="logo" /></Link></div>
          <SearchForm />
          <nav className={s.header__menu}>
            <ul>
              <li className={pathname === '/products' ? 'active' : ''}><Link href="/products"  className={s.header__menu_link}>Каталог</Link></li>
              <li className={pathname === '/products/1' ? 'active' : ''}><Link href="/products/1"  className={s.header__menu_link}>Product</Link></li>
            </ul>
          </nav>
          <Link href="/cart"><Image src={cart} alt="cart" /></Link>
        </div>
      </header>
    </>
  );
};

export default Header;
