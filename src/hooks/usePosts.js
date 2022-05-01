import {useMemo} from "react";

export const useSortedPosts = (posts, sort) => {
	const sortedPosts = useMemo( () => {
		if(sort) {
			return [...posts].sort((a,b) => a[sort].localeCompare(b[sort]))
		}
		return posts;
	}, [sort, posts])

	return sortedPosts;
}

export const usePosts = (posts, sort, query) => {
	const sortedPosts = useSortedPosts(posts, sort);

	const sortedAndSearchedPosts = useMemo( () => {
		return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
	}, [query, sortedPosts])

	return sortedAndSearchedPosts;
}

// const [selectedSort, setSelectedSort] = useState('')
// const [searchQuery, setSearchQuery] = useState('')

// function getSortedPosts() {
//     console.log('sortedPosts')
//     if(selectedSort) {
//         return [...posts].sort((a,b) => a[selectedSort].localeCompare(b[selectedSort]))
//     }
//     return posts;
// }
//
// const sortedPosts = getSortedPosts()

// const sortedPosts = useMemo( () => {
//     console.log('sortedPosts')
//     if(selectedSort) {
//         return [...posts].sort((a,b) => a[selectedSort].localeCompare(b[selectedSort]))
//     }
//     return posts;
// }, [selectedSort, posts])
//
// const sortedAndSearchedPosts = useMemo( () => {
//     return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery))
// }, [searchQuery, sortedPosts])



//sort - то что выбрал пользовтель - приходит из MySelect
// const sortPosts = (sort) => {
//     setSelectedSort(sort);
// }