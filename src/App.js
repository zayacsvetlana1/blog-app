import React, {useState} from "react";
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/myModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePosts";

function App() {

    const [posts, setPosts] = useState([
      {id: 1, title: 'Coffeescript', body: 'zdvescription'},
      {id: 2, title: 'Timescript', body: 'fhgjncvdescription'},
      {id: 3, title: 'Lavascript', body: 'adgbcdescription'}
    ])

    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

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
      <div className="App">
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
          <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Посты'/>
      </div>
  );
}

export default App;
