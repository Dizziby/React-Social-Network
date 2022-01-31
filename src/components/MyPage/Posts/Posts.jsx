import React from 'react';
import styles from './Posts.module.css';
import Post from "./Post/Post";
import AddPost from "./AddPost/AddPost";

const Posts = (props) => {

    let postsItem = props.state.myPageData.postDate.map(el => <Post name={el.name} date={el.date} text={el.text}/>);

    return (
        <div className={styles.posts}>
            <div>
                <AddPost state={props.state} dispatch={props.dispatch}/>
            </div>
            <div>
                {postsItem}
            </div>
        </div>
    )
}
export default Posts;