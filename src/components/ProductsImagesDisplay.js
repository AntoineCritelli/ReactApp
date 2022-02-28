import React from 'react';
import "../css/ProductsImagesDisplay.css";
import {Link} from "react-router-dom";

class ProductsImagesDisplay extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isMouseOver: false
        };
    }

    handlerOnMouseOver = () => {
        this.setState(() => ({
            isMouseOver: true
        }));
    }

    handlerOnMouseOut = () => {
        this.setState(() => ({
            isMouseOver: false
        }));
    }

    render () {
        return (
            <Link  to={`/productpage/${this.props.article.type}/${this.props.id}`} className="ProductImagesDisplay">
                <img alt={(this.state.isMouseOver)?this.props.article.image2:this.props.article.image1}
                     src={'/Images/'.concat(this.state.isMouseOver?this.props.article.image2:this.props.article.image1)}
                     onMouseOver={() => this.handlerOnMouseOver()}
                     onMouseOut={() => this.handlerOnMouseOut()}
                />
            </Link>
        )
    }
}

export default ProductsImagesDisplay;