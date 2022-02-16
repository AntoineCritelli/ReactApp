import React, { Component } from 'react';
import Main from './components/Main.js';
import "./App.css";

import ArticleDisplay from "./components/ArticleDisplay";


class App extends Component {
  render() {
	return (
			<div className="App">

				<ArticleDisplay />

			</div>
		)
  }
}

export default App;
