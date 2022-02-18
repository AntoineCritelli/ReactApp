import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./App.css";

// import pages
import ArticleDisplay from "./components/ArticleDisplay";
import NavBar from "./components/NavBar";
import PageNotFound from "./components/PageNotFound";
import MainPage from "./components/MainPage";


class App extends Component {
  render() {
	return (
				<BrowserRouter className="App">
					<NavBar />
					<Routes>
						<Route path="/" element={<MainPage />} />
						<Route path="/products/*" element={<ArticleDisplay />} />
						<Route path="*" element={<PageNotFound />} />
					</Routes>
				</BrowserRouter>
		)
  }
}

export default App;
