import React, {useEffect, useState} from 'react';
import './styles/App.css'
import Navbar from "./components/UI/navbar/Navbar";
import AppRouter from "./components/AppRouter";
import {BrowserRouter} from "react-router-dom";
import {AuthContext} from "./context";


const App = () => {
	const [isAuth, setIsAuth] = useState(false);

	useEffect (() => {
		if (localStorage.getItem('auth')) {
			setIsAuth(true)
		}
	}, []);

	return (
		<div className="App">
			<AuthContext.Provider value={{
				isAuth,
				setIsAuth
			}}>
				<BrowserRouter>
					<Navbar/>
					<AppRouter/>
				</BrowserRouter>
			</AuthContext.Provider>
		</div>

	);
};

export default App;