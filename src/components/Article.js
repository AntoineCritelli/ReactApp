import React  from 'react';
import {Link} from "react-router-dom";
import "../css/Article.css";

// import COmponent
import Display from './Display.js';

class Article extends React.Component{

    render() {

        return (
            <div className="articleContainer">
                <Display id={this.props.id} article={this.props.article} />

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

export default Article;