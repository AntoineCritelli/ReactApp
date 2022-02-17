import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./App.css";

// import pages
import ArticleDisplay from "./components/ArticleDisplay";
import NavBar from "./components/NavBar";


class App extends Component {
  render() {
	return (
			<div className="App">
				<NavBar />
				<BrowserRouter>
					<Routes>
						<Route path="/product" element={<ArticleDisplay />} />
					</Routes>
				</BrowserRouter>
			</div>
		)
  }
}

export default App;
