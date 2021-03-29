import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css';

const MyPosts = (props) => {

  let postsElements = props.posts.map( p => <Post message={p.msg} likeCount={p.likesCount} /> );

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  }

  return ( 
  <div >
    My posts
    
    <div>
      <textarea ref={newPostElement}>
      </textarea>
    </div>
    <div>
      <button onClick={addPost}>Add post</button>
    </div>

    <div className={classes.posts}>
      {postsElements}
    </div>
  </div>
    )
}

export default MyPosts;