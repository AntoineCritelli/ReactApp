import React  from 'react';
import {Link} from "react-router-dom";
import "../css/Article.css";

// import COmponent
import ProductsImagesDisplay from './ProductsImagesDisplay.js';

class ProductDisplay extends React.Component{

    render() {

        return (
            <div className="productContainer">
                <ProductsImagesDisplay id={this.props.id} article={this.props.article} />

                <Link className="name" to={`/productpage/${this.props.article.type}/${this.props.id}`}>
                    {this.props.article.name}
                </Link>

                <div className="prix">
                    {this.props.article.prix} €
                </div>
            </div>
        )
    }
}

export default ProductDisplay;