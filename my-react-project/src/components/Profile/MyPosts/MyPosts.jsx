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
      <Post message='How do you do you?' likeCount='5'/>
      <Post message='Pimp my ride' likeCount='1'/>
      <Post message='Take my love, take my land, Take me where i cannot stand, i dont care, im still free, you cant take the sky from me' likeCount='3'/>
    </div>
    </div>
}

export default MyPosts;