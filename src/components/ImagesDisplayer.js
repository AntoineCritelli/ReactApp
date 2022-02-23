import React from "react";

import "../css/ImageDisplay.css";

class ImagesDisplayer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentImage: props.article.image1
        }
    }

    handleClick = (src) => {
        this.setState(() => ({
            currentImage: src
        }));
    }


    render () {
        return (
            <div className="ImagesDisplayer">
                <div className="BigImage">
                    <img alt="image1" src={`/Images/${this.state.currentImage}`}/>
                </div>
                <div className="SmallImages">
                    <img alt="image1" src={`/Images/${this.props.article.image1}`} onClick={() => this.handleClick(this.props.article.image1)} />
                    <img alt="image2" src={`/Images/${this.props.article.image2}`} onClick={() => this.handleClick(this.props.article.image2)} />
                    <img alt="image3" src={`/Images/${this.props.article.image1}`} onClick={() => this.handleClick(this.props.article.image1)}/>
                </div>
            </div>
        )
    }
}

export default ImagesDisplayer;