import Head from "next/head";
import s from "@/styles/Home.module.css";
import HeroSlider from "@/components/hero_slider";
import ProductCard from "@/components/products_card";
import { GetStaticProps } from "next";
import { useState, useEffect } from "react";

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

const Home: React.FC<ProductsPageProps> = ({ products }) => {
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);
  const [screenWidth, setScreenWidth] = useState<number>(0);

  useEffect(() => {
    setScreenWidth(window.innerWidth);

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenWidth < 600) {
      setDisplayedProducts(products.slice(0, 1));
    } else if (screenWidth < 1010) {
      setDisplayedProducts(products.slice(0, 2));
    } else if (screenWidth < 1300) {
      setDisplayedProducts(products.slice(0, 3));
    } else {
      setDisplayedProducts(products.slice(0, 4));
    }
  }, [screenWidth, products]);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeroSlider />
        <div className={s.home_page_products}>
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps<ProductsPageProps> = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await res.json();

  return {
    props: {
      products,
    },
  };
};

export default Home;
