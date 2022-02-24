import React, { Component } from "react";
import '../css/MainPage.css';

class MainPage extends Component {
    render () {
        return (
            <div className="MainPage">
                <p>
                Ceci est un site démo React fait par <a href="/CV.pdf" target="_blank" className="lien">Antoine Critelli</a>
                </p>
                <p>
                    Vous pouvez retrouver le code source sur mon <a href="https://github.com/AntoineCritelli/ReactApp" target="_blank" className="lien">git</a>.
                </p>
            </div>
        )
    }
}

export default MainPage;