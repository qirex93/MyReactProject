import Post from './Post/Post';
import classes from './MyPosts.module.css';

const MyPosts = (props) => {

  let postsData = [
    {id: 1, msg: 'Take my love, take my land ', likesCount: 12},
    {id: 2, msg: 'Take me where i cannot stand,', likesCount: 4},
    {id: 3, msg: 'i dont care, im still free, you cant take the sky from me', likesCount: 6,}
 ]
  
  let postsElements = postsData.map( p => <Post message={p.msg} likeCount={p.likesCount} /> );


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