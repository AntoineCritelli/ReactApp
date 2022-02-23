import React from "react";
import { useParams } from "react-router-dom";


import Products from "../data/Datas";

export default function ProductPage() {

    let { producttype, productid } = useParams();

    let product = Products.getProduct(producttype, parseInt(productid));

    return (
        <div>
            {product.prix}
        </div>
    )
}