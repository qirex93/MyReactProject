import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';

const Profile = () => {
  return <div>

    <div>
      <img className={classes.bg} src='https://photoshop-kopona.com/uploads/posts/2018-03/1521289405_17-8.jpg' />
    </div>

    <div>
      My posts
    </div>
    <MyPosts />

  </div>


}

export default Profile;