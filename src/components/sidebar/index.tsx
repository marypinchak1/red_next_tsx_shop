import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import s from "./index.module.scss";

interface Category {
  name: string;
  path: string;
}

interface Products {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface SidebarProps {
  products: Products[];
}

const Sidebar: React.FC<SidebarProps> = ({ products }) => {
  const router = useRouter();
  const { pathname } = router;
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    // Extract unique categories from products data
    const uniqueCategories = Array.from(new Set(products.map(product => product.category)));

    // Create category objects with paths
    const categoryObjects = uniqueCategories.map(category => ({
      name: category,
      path: `/products/${category.toLowerCase().replace('\'', '')}`
    }));

    setCategories(categoryObjects);
  }, [products]);

  return (
    <>
      <body>
        <section className={s.sidebar}>
          <h4>Товари за категоріями</h4>
          <hr />
          <nav className={s.sidebar__menu}>
            <ul>
              {categories.map((category, index) => (
                <li key={index} className={pathname === category.path ? 'active' : ''}>
                  <Link href={category.path} className={s.header__menu_link}>{category.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>
      </body>
    </>
  );
};

export default Sidebar;
