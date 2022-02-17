import React, { Component } from 'react';
import "../css/Display.css";
import {Link} from "react-router-dom";

class Display extends Component {

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
            <Link to={`/product/${this.props.id}`}>
                <img alt={(this.state.isMouseOver)?"Image2":"Image1"}
                     src={'/Images/'.concat(this.state.isMouseOver?this.props.image2:this.props.image1)}
                     onMouseOver={() => this.handlerOnMouseOver()}
                     onMouseOut={() => this.handlerOnMouseOut()}
                />
            </Link>
        )
    }
}

export default Display;