import React, { Component } from 'react';
import "../css/Display.css";

class Display extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isMouseOver: false
        };
    }

    handlerOnMouseOver = (e) => {
        this.setState(state => ({
            isMouseOver: true
        }));
    }

    handlerOnMouseOut = (e) => {
        this.setState(state => ({
            isMouseOver: false
        }));
    }

    render () {
        return (
            <a href={this.props.productPage}>
                <img alt={(this.state.isMouseOver)?"Image2":"Image1"}
                     src={(this.state.isMouseOver)?this.props.image2:this.props.image1}
                     onMouseOver={() => this.handlerOnMouseOver()}
                     onMouseOut={() => this.handlerOnMouseOut()}
                />
            </a>
        )
    }
}

export default Display;