import React from "react";
import s from "./index.module.scss";

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <>
            <div className={s.productCard_wrapper}>
                <div className={s.productCard}>
                    <img src={product.image} alt={product.title} className={s.productCard__img} />
                    <h4 className={s.productCard__title}>{product.title}</h4>
                    <p className={s.productCard__price}>{product.price} USD</p>
                    <button className={s.productCard__btn}>До кошика</button>
                </div>
            </div>

        </>
    );
};

export default ProductCard;
