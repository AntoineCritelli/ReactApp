import React, { Component } from "react";
import {Routes, Route} from "react-router-dom";
import "../css/ArticleDisplay.css";

import Article from './Article';

const pants = [
  //[name, prix, image1, image2]
    ["Pantalon", 39.99, "Pants1.jpg", "Pants2.jpg"],
    ["Pantalon type 1", 19.99, "Pants1.jpg", "Pants2.jpg"],
    ["Pantalon type 2", 29.99, "Pants1.jpg", "Pants2.jpg"],
    ["Pantalon type 3", 89.99, "Pants1.jpg", "Pants2.jpg"],
    ["Pantalon type 4", 129.99, "Pants1.jpg", "Pants2.jpg"],
    ["Pantalon type 4", 129.99, "Pants1.jpg", "Pants2.jpg"]
]

const shirt = [
    //[name, prix, image1, image2]
    ["Chemise", 39.99, "Shirt1.jpg", "Shirt2.jpg"],
    ["Chemise type 1", 19.99, "Shirt1.jpg", "Shirt2.jpg"],
    ["Chemise type 2", 29.99, "Shirt1.jpg", "Shirt2.jpg"],
    ["Chemise type 3", 89.99, "Shirt1.jpg", "Shirt2.jpg"],
    ["Chemise type 4", 129.99, "Shirt1.jpg", "Shirt2.jpg"],
    ["Chemise type 4", 129.99, "Shirt1.jpg", "Shirt2.jpg"]
]

class ArticleDisplay extends Component {
    render() {
        return (
            <div className="ArticleContainer">
                <Routes>
                    <Route
                        path="pants"
                        element={pants.map((article, index) =>
                            <Article
                                key={index}
                                id={index}
                                name={article[0]}
                                prix={article[1]}
                                image1={article[2]}
                                image2={article[3]}
                            />
                        )}
                    />
                    <Route
                        path="shirts"
                        element={shirt.map((article, index) =>
                            <Article
                                key={index}
                                id={index}
                                name={article[0]}
                                prix={article[1]}
                                image1={article[2]}
                                image2={article[3]}
                            />
                        )}
                    />
                </Routes>
            </div>
        )
    }
}

export default ArticleDisplay;