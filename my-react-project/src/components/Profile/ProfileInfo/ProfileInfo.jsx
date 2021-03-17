import classes from './ProfileInfo.module.css';



const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img className={classes.bg} src='https://photoshop-kopona.com/uploads/posts/2018-03/1521289405_17-8.jpg'  />
      </div>
      <div>
        ava+description
      </div>
    </div>
  )
}

export default ProfileInfo;