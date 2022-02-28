import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import "../css/ArticleDisplay.css";

import ProductDisplay from './ProductDisplay';
import Products from "../data/Datas";


class ProductsPage extends React.Component {

    render () {

        return (
            <div className="ProductsContainer">
                <Routes>
                    <Route
                        path="pants"
                        element={Products.getProductsByType("pants").map((article) =>
                            <ProductDisplay
                                key={article.id}
                                id={article.id}
                                article={article}
                            />
                        )}
                    />
                    <Route
                        path="shirts"
                        element={Products.getProductsByType("shirt").map((article) =>
                            <ProductDisplay
                                key={article.id}
                                id={article.id}
                                article={article}
                            />
                        )}
                    />
                    <Route
                        path="sport/t-shirts"
                        element={Products.getProductsByType("sportShirt").map((article) =>
                            <ProductDisplay
                                key={article.id}
                                id={article.id}
                                article={article}
                            />
                        )}
                    />
                    <Route
                        path="sport/shorts"
                        element={Products.getProductsByType("sportShort").map((article) =>
                            <ProductDisplay
                                key={article.id}
                                id={article.id}
                                article={article}
                            />
                        )}
                    />
                    <Route
                        path="sport/shoes"
                        element={Products.getProductsByType("sportShoe").map((article) =>
                            <ProductDisplay
                                key={article.id}
                                id={article.id}
                                article={article}
                            />
                        )}
                    />
                    <Route path="*" element={<Navigate to="/PageNotFound" />} />
                </Routes>
            </div>
        )
    }
}

export default ProductsPage;