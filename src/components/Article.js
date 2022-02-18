import React, { Component } from 'react';
import {Link} from "react-router-dom";
import "../css/Article.css";

// import COmponent
import Display from './Display.js';

class Article extends Component {

    render() {
        return (
            <div className="articleContainer">
                <Display id={this.props.id} image1={this.props.image1} image2={this.props.image2}/>

                <Link className="name" to={`/product/${this.props.id}`}>
                    {this.props.name}
                </Link>

                <div className="prix">
                    {this.props.prix} €
                </div>
            </div>
        )
    }
}


export default Article;