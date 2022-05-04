import classes from "./MyButton.module.css";
import React from "react";

const MyButtonActive = ({children, ...props}) => {
	return (
		<button {...props} className={classes.myBtn_active}>
			{children}
		</button>
	);
};

export default MyButtonActive;