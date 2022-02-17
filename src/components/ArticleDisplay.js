import React, { Component } from "react";
import "../css/ArticleDisplay.css";

import Main from './Main';

const atricles = [
  //[Product id, name, prix, image1, image2]
    [0, "Pantalon", 39.99, "image1.jpg", "image2.jpg"],
    [1, "Pantalon type 1", 19.99, "image1.jpg", "image2.jpg"],
    [2, "Pantalon type 2", 29.99, "image1.jpg", "image2.jpg"],
    [3, "Pantalon type 3", 89.99, "image1.jpg", "image2.jpg"],
    [4, "Pantalon type 4", 129.99, "image1.jpg", "image2.jpg"]
]

const allMain = atricles.map((article) =>
    <Main
        key={article[0]}
        id={article[0]}
        name={article[1]}
        prix={article[2]}
        image1={article[3]}
        image2={article[4]}
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