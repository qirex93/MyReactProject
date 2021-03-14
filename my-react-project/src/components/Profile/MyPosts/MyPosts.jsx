import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css';

const MyPosts = () => {
  return <div >

    <div>
      My posts
    </div>

    <div>
      New post
    </div>

    <div className={classes.posts}>
      <Post />
      <Post />
      <Post />
    </div>
    </div>
}

export default MyPosts;