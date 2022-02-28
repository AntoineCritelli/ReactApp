import React from "react";
import { useParams } from "react-router-dom";
import "../css/ProductPage.css";


import Products from "../data/Datas";
import ProductDisplay from "./ProductDisplay";
import ImagesDisplay from "./ImagesDisplay";

export default function ProductPage() {

    let { producttype, productid } = useParams();

    let product = Products.getProduct(producttype, parseInt(productid));

    return (
        <div className="ProductPage">
            <ImagesDisplay article={product} />
            <div className="ProductDescription">
                <div className="ProductName">{product.name}</div>
                <div className="ProductPrice">{product.prix} €</div>
                <div className="Description">
                    Lorem ipsum dolor sit amet. Et beatae excepturi ut vitae aliquid eum reiciendis minus et dolores ullam non consectetur molestias. Et ipsa dolorem qui suscipit delectus non debitis dolores rem rerum nostrum ut voluptas velit.

                    Et fugiat aperiam 33 maxime voluptatum ad minus esse. Eos officia repellat ea dolore quibusdam qui quaerat molestiae aut possimus blanditiis qui totam suscipit aut corrupti voluptatem. Et doloremque omnis qui omnis totam sed doloribus quod. Aut ipsum natus in fuga minima hic nesciunt ipsa sed consectetur exercitationem qui consequatur incidunt At quod aliquam ut omnis modi.

                    Est assumenda vero a optio suscipit aut cumque ipsa? Id officiis commodi aut neque quisquam est voluptas neque qui vero quis ea quam sunt quo iusto officiis sit accusamus odio. Non officia porro qui odit esse ut modi magnam et aspernatur praesentium ea facere voluptatem.
                </div>
            </div>
            <div className="ProductAssociation">
                {Products.getProductsByType(product.type).map((product) =>
                    <ProductDisplay
                        key={product.id}
                        id={product.id}
                        article={product}
                    />
                )}
            </div>
        </div>
    )
}