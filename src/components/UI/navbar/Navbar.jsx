import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import classes from './Navbar.module.css';
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context";


const Navbar = () => {
	const { isAuth, setIsAuth } = useContext(AuthContext);

	const logout = () => {
		setIsAuth(false);
		localStorage.removeItem('auth')
	}

	return (
		<div className={classes.navbar}>
			<div className={classes.navbar__links}>
				<Link to="/"> Home</Link>
				<Link to="about"> About</Link>
				<Link to="posts"> Posts</Link>
				<MyButton onClick={logout}>  Выйти </MyButton>
			</div>
		</div>
	);
};

export default Navbar;