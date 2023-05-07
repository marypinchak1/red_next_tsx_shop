import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import ProductCard from "../products_card";
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
  const [selectedCategory, setSelectedCategory] = useState<string>('');

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

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory ? products.filter(product => product.category === selectedCategory) : products;

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
                  <a className={s.header__menu_link} onClick={() => handleCategoryClick(category.name)}>{category.name}</a>
                </li>
                
              ))}
            </ul>
          </nav>
        </section>
        <section className={s.products}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
      </body>
    </>
  );
};

export default Sidebar;
