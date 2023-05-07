import React, { useState } from "react";
import { GetStaticProps } from "next";
import ProductCard from "../../components/products_card";
import Sidebar from "../../components/sidebar";
import s from "./index.module.scss";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface ProductsPageProps {
  products: Product[];
}

const ProductsPage: React.FC<ProductsPageProps> = ({ products }) => {
  const [currentCategory, setCurrentCategory] = useState("all");
  const [productsList, setProductsList] = useState(products);
  // change category
  const changeCategory = (category: string) => {
    // set current category
    setCurrentCategory(category);
    // filter products by category
    if (category === "all") {
      setProductsList(products);
    } else {
      const filteredProducts = products.filter(
        (product) => product.category === category
      );
      setProductsList(filteredProducts);
    }
  };
  return (
    <>
      <main>
        <div className={s.products_page}>
          <div className={s.products_page__sidebar}>
            <Sidebar
              currentCategory={currentCategory}
              setCategory={changeCategory}
              products={products}
            />
          </div>

          <div className={s.products_page__content}>
            <h1>Всі товари</h1>
            <div className={s.products}>
              {productsList.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps<ProductsPageProps> = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data: Product[] = await res.json();
  return {
    props: {
      products: data,
    },
  };
};

export default ProductsPage;
