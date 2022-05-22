import Home from "../pages/Home";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import About from "../pages/About";
import Login from "../pages/Login";

export const privateRoutes = [
		{path:"/", element: <Home/> },
		{path:"posts", element: <Posts/> },
		{path:"posts/:id", element: <PostIdPage/> },
		{path:"about", element: <About/> },
	]

export const publicRoutes = [
	{path:"login", element: <Login/> },
]