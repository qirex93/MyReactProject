import React from 'react';
import classes from './Profile.module.css';

const Profile = () => {
  return <div className={classes.content}>

    <div>
      <img className={classes.bg} src='https://photoshop-kopona.com/uploads/posts/2018-03/1521289405_17-8.jpg' />
    </div>

    <div>
      <img className={classes.avatar} src='https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-90.jpg' />
    </div>

    <div>
      My posts
    </div>

    <div>
      New post
    </div>

    <div className={classes.posts}>
      <div className={classes.item}>
        post 1
      </div>

      <div className={classes.item}>
        post 2
      </div>
    </div>

  </div>
}

export default Profile;