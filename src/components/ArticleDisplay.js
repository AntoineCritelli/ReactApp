import React from "react";
import { Routes, Route } from "react-router-dom";
import "../css/ArticleDisplay.css";

import Article from './Article';
import PageNotFound from "./PageNotFound";
import Products from "../data/Datas";


class ArticleDisplay extends React.Component {

    render () {

        return (
            <div className="ArticleContainer">
                <Routes>
                    <Route
                        path="pants"
                        element={Products.getProductsByType("pants").map((article) =>
                            <Article
                                key={article.id}
                                id={article.id}
                                article={article}
                            />
                        )}
                    />
                    <Route
                        path="shirts"
                        element={Products.getProductsByType("shirt").map((article, index) =>
                            <Article
                                key={article.id}
                                id={article.id}
                                article={article}
                            />
                        )}
                    />
                    <Route
                        path="sport/t-shirts"
                        element={Products.getProductsByType("sportShirt").map((article, index) =>
                            <Article
                                key={article.id}
                                id={article.id}
                                article={article}
                            />
                        )}
                    />
                    <Route
                        path="sport/shorts"
                        element={Products.getProductsByType("sportShort").map((article, index) =>
                            <Article
                                key={article.id}
                                id={article.id}
                                article={article}
                            />
                        )}
                    />
                    <Route
                        path="sport/shoes"
                        element={Products.getProductsByType("sportShoe").map((article, index) =>
                            <Article
                                key={article.id}
                                id={article.id}
                                article={article}
                            />
                        )}
                    />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </div>
        )
    }
}

export default ArticleDisplay;