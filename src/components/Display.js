import React from 'react';
import "../css/Display.css";
import {Link} from "react-router-dom";

class Display extends React.Component {

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
            <Link  to={`/productpage/${this.props.article.type}/${this.props.id}`}>
                <img alt={(this.state.isMouseOver)?this.props.article.image2:this.props.article.image1}
                     src={'/Images/'.concat(this.state.isMouseOver?this.props.article.image2:this.props.article.image1)}
                     onMouseOver={() => this.handlerOnMouseOver()}
                     onMouseOut={() => this.handlerOnMouseOut()}
                />
            </Link>
        )
    }
}

export default Display;