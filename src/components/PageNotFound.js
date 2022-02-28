import React, { Component } from "react";
import "../css/PageNotFound.css";


class PageNotFound extends Component {
    render () {
        return (
            <div className="pagenotfound">
                <h1>404 : Page Not Found</h1>
                <p>Désolé mais la page que vous essayer d'accéder n'existe pas</p>
            </div>
        )
    }
}

export default PageNotFound;