import React, { Component } from 'react';
import Display from './Display.js';
import "../css/Main.css";

class Main extends Component {

    render() {
        return (
            <div className="mainContainer">
                <Display key={this.props.keys} image1={this.props.image1} image2={this.props.image2} productPage={this.props.productPage}/>
                <a className="name" href={this.props.productPage}>{this.props.name}</a>
                <div className="prix">{this.props.prix} €</div>
            </div>
        )
    }
}


export default Main;