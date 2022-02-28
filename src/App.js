import React, { Component } from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

// import pages
import ProductsPage from "./components/ProductsPage";
import NavBar from "./components/NavBar";
import PageNotFound from "./components/PageNotFound";
import MainPage from "./components/MainPage";
import ProductPage from "./components/ProductPage";


class App extends Component {
	render() {
		return (
				<BrowserRouter className="App">
					<NavBar />
					<Routes>
						<Route path="/" element={<MainPage />} />
						<Route path="/products/*" element={<ProductsPage />} />
						<Route path="/productpage/:producttype/:productid" element={<ProductPage />} />
						<Route path="/PageNotFound" element={<PageNotFound />} />
						<Route path="*" element={<Navigate to="/PageNotFound" />} />
					</Routes>
				</BrowserRouter>
		)
  	}
}

export default App;
