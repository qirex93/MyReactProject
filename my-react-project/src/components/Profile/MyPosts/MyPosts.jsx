import Post from './Post/Post';
import classes from './MyPosts.module.css';

const MyPosts = (props) => {

  let postsElements = props.posts.map( p => <Post message={p.msg} likeCount={p.likesCount} /> );

  return ( 
  <div >
    My posts
    
    <div>
      <textarea></textarea>
      <button>Add post</button>
    </div>

    <div className={classes.posts}>
      {postsElements}
    </div>
  </div>
    )
}

export default MyPosts;