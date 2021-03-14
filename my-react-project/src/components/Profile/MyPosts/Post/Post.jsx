import React from 'react';
import classes from './Post.module.css';

const Post = () => {
  return <div className={classes.item}>
    <img className={classes.avatar} src='https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-90.jpg' />
        post 1
        <div>
      <span>like</span>
    </div>
  </div>
}

export default Post;