
"use client"

import { useEffect } from "react";

const { useAtom } = require("jotai")
const { productsAtom } = require("../store/store")

const ProductList = () => {
    const [products, setProducts] = useAtom(productsAtom);

    const handleFetchProducts = async () => {
        const response = await fetch("/api/routes/products");
        const data = await response.json();
        setProducts(data)
    }
     useEffect(() =>{
        handleFetchProducts();
     }, [])
     
    return (
        <div>
        {products.map((product) => (
            <span>
                {product.name} - R$ {product.price}
            </span>
        ))}
        </div>
    )
}

export default ProductList;