import React, { Component } from "react";
import "../css/ArticleDisplay.css";

import Main from './Main';

import image1src from "../Images/image1.jpg";
import image2src from "../Images/image2.jpg";


const atricles = [
    [0, "Pantalon", 39.99, image1src, image2src, "pantalon"],
    [1, "Pantalon type 1", 19.99, image1src, image2src, "pantalon1"],
    [2, "Pantalon type 2", 29.99, image1src, image2src, "pantalon2"],
    [3, "Pantalon type 3", 89.99, image1src, image2src, "pantalon3"],
    [4, "Pantalon type 4", 129.99, image1src, image2src, "pantalon4"]
]
const allMain = atricles.map((article) =>
    <Main
        key={article[0]}
        name={article[1]}
        prix={article[2]}
        image1={article[3]}
        image2={article[4]}
        productPage={"./productpage?product=".concat(article[5])}
    />
);

class ArticleDisplay extends Component {
    render() {
        return (
            <div className="ArticleContainer">
                {allMain}
            </div>
        )
    }
}

export default ArticleDisplay;