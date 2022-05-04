import React from 'react';
import './styles/App.css'
import {Route, Routes} from "react-router-dom";
import Posts from "./pages/Posts";
import About from "./pages/About";
import Navbar from "./components/UI/navbar/Navbar";

const App = () => {
	return (
		<div className="App">
			<Navbar/>
			<Routes>
				<Route path="posts" element={<Posts />} />
				<Route path="about" element={<About />} />
				<Route
					path="*"
					element={
						<main style={{ padding: "1rem" }}>
							<p>There's nothing here!</p>
						</main>
					}
				/>
			</Routes>
		</div>

	);
};

export default App;