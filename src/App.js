import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./App.css";

// import pages
import ArticleDisplay from "./components/ArticleDisplay";
import NavBar from "./components/NavBar";


class App extends Component {
  render() {
	return (
				<BrowserRouter className="App">
					<NavBar />
					<Routes>
						<Route path="/products/*" element={<ArticleDisplay />} />
					</Routes>
				</BrowserRouter>
		)
  }
}

export default App;
