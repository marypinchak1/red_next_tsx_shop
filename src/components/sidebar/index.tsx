import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ProductCard from "../products_card";
import s from "./index.module.scss";

interface SidebarProps {
  products: [];
  setCategory: (category: string) => void;
  currentCategory: string;
}

const Sidebar: React.FC<SidebarProps> = ({
  products,
  setCategory,
  currentCategory,
}) => {
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  // on load component
  useEffect(() => {
    // get all categories
    const categories = products.map((product) => product.category);
    // remove duplicate categories
    const uniqueCategories = [...new Set(categories)];
    // set categories
    setCategories(uniqueCategories);
  }, []);
  return (
    <>
      <section className={s.sidebar}>
        <h4>Товари за категоріями</h4>
        <hr />
        <nav className={s.sidebar__menu}>
          <ul>
            <li className={`${currentCategory === "all" ? s.active : ""}`}>
              <a
                onClick={() => {
                  setCategory("all");
                }}
                href="#"
              >
                All
              </a>
            </li>
            {categories.map((category, index) => (
              <li
                key={index}
                className={`${currentCategory === category ? s.active : ""}`}
              >
                <a
                  onClick={() => {
                    setCategory(category);
                  }}
                  href="#"
                >
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </>
  );
};

export default Sidebar;
