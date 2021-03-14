import classes from './Post.module.css';

const Post = (props) => {
  return <div className={classes.item}>
    <img className={classes.avatar} src='https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-90.jpg' />
        {props.message}
        <div>
      <span>like</span>
      <span>{props.likeCount}</span>
    </div>
  </div>
}

export default Post;