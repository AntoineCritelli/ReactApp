import React, { Component } from "react";
import {Routes, Route, useParams} from "react-router-dom";
import "../css/ArticleDisplay.css";

import Article from './Article';
import PageNotFound from "./PageNotFound";

//TODO better way to create data (ex : via bdd)
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

const sportShirt = [
    //[name, prix, image1, image2]
    ["T-shirt de sport", 39.99, "SportShirt1.jpg", "SportShirt2.jpg"],
    ["T-shirt de sport type 1", 19.99, "SportShirt1.jpg", "SportShirt2.jpg"],
    ["T-shirt de sport type 2", 29.99, "SportShirt1.jpg", "SportShirt2.jpg"],
    ["T-shirt de sport type 3", 89.99, "SportShirt1.jpg", "SportShirt2.jpg"],
    ["T-shirt de sport type 4", 129.99, "SportShirt1.jpg", "SportShirt2.jpg"],
    ["T-shirt de sport type 4", 129.99, "SportShirt1.jpg", "SportShirt2.jpg"]
]

const sportShort = [
    //[name, prix, image1, image2]
    ["short de sport", 39.99, "SportShort1.jpg", "SportShort2.jpg"],
    ["short de sport type 1", 19.99, "SportShort1.jpg", "SportShort2.jpg"],
    ["short de sport type 2", 29.99, "SportShort1.jpg", "SportShort2.jpg"],
    ["short de sport type 3", 89.99, "SportShort1.jpg", "SportShort2.jpg"],
    ["short de sport type 4", 129.99, "SportShort1.jpg", "SportShort2.jpg"],
    ["short de sport type 4", 129.99, "SportShort1.jpg", "SportShort2.jpg"]
]

const sportShoes = [
    //[name, prix, image1, image2]
    ["chaussure de sport", 39.99, "SportShoe1.jpg", "SportShoe2.jpg"],
    ["chaussure de sport type 1", 19.99, "SportShoe1.jpg", "SportShoe2.jpg"],
    ["chaussure de sport type 2", 29.99, "SportShoe1.jpg", "SportShoe2.jpg"],
    ["chaussure de sport type 3", 89.99, "SportShoe1.jpg", "SportShoe2.jpg"],
    ["chaussure de sport type 4", 129.99, "SportShoe1.jpg", "SportShoe2.jpg"],
    ["chaussure de sport type 4", 129.99, "SportShoe1.jpg", "SportShoe2.jpg"]
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
                    <Route
                        path="sport/t-shirts"
                        element={sportShirt.map((article, index) =>
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
                        path="sport/shorts"
                        element={sportShort.map((article, index) =>
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
                        path="sport/shoes"
                        element={sportShoes.map((article, index) =>
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
                        path="sport/shoes/:id"
                        element={
                            <Article
                                id={0}
                                name={sportShoes[0][0]}
                                prix={sportShoes[0][1]}
                                image1={sportShoes[0][2]}
                                image2={sportShoes[0][3]}
                            />
                        }
                    />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </div>
        )
    }
}

export default ArticleDisplay;