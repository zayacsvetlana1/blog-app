import React, {useEffect, useState} from 'react';
import {usePosts} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {getPageCount} from "../utils/pages";
import MyButton from "../components/UI/button/MyButton";
import MyModal from "../components/UI/myModal/MyModal";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import Loader from "../components/UI/Loader/Loader";
import PostList from "../components/PostList";
import Pagination from "../components/UI/pagination/Pagination";

const Posts = () => {
	const [posts, setPosts] = useState([])
	const [filter, setFilter] = useState({sort: '', query: ''});
	const [modal, setModal] = useState(false);
	const [totalPages, setTotalPages] = useState(0)
	const [limit, setLimit] = useState(10)
	const [page, setPage] = useState(1)
	const [isPostsLoading, setIsPostsLoading] = useState(false)

	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);


	const [fetchPosts, isPostLoading, postError] = useFetching( async () => {
		const response = await PostService.getAllPosts(limit, page)
		setPosts(response.data)
		const totalCount = response.headers['x-total-count']
		setTotalPages(getPageCount(totalCount, limit))
	})

	useEffect(() => {
		fetchPosts()
	}, [page])

	const changePage = (page) => {
		setPage(page)
	}


	//получаем newPost из дочернего компонента
	const createPost = (newPost) => {
		setPosts([...posts, newPost])
		setModal(false)
	}

	//получаем post из дочернего компонента
	const removePost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	return (
		<div>
			<MyButton style={{margin: '30px auto'}} onClick={ () => setModal(true)} >
				Создать пост
			</MyButton>
			<MyModal visible={modal} setVisible={setModal}>
				<PostForm create={createPost}/>
			</MyModal>

			<PostFilter
				filter={filter}
				setFilter={setFilter}/>
			<hr style={{margin: '15px 0'}}/>

			{postError &&
			<h1>Произошла ошибка ${postError}</h1>
			}
			{isPostsLoading
				? <div style={{display:"flex", justifyContent: "center"}}><Loader/></div>
				: <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Посты'/>
			}
			<Pagination
				page={page}
				totalPages={totalPages}
				changePage={changePage}
			/>
		</div>
	);
};

export default Posts;