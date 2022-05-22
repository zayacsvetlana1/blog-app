import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import Comments from "../components/Comments";

const PostIdPage = () => {
	let params = useParams()
	console.log (params)
	const [post, setPost] = useState({})
	const [comments, setComments] = useState([])
	const [fetchPostById, isLoading, error] = useFetching( async () => {
		const response = await PostService.getPostById(params.id)
		setPost(response.data)
	})

	const [fetchComments, isCommentsLoading, commentsError] = useFetching( async () => {
		const response = await PostService.getCommentsByPostId(params.id)
		setComments(response.data)
	})

	useEffect(() => {
		fetchPostById()
		fetchComments()
	},[])


	return (
		<div>
			<h1> PostPage with ID: {params.id} </h1>
			{isLoading
				? <Loader/>
				: <div> {post.id}, {post.title}</div>
			}
			<h1 style={{marginTop: 20}}>Комментарии</h1>
			{isCommentsLoading
				? <Loader/>
				: <Comments comments={comments}/>
			}
		</div>
	);
}

export default PostIdPage;