import React from 'react';
import styles from './Posts.module.css';
import Post from "./Post/Post";
import AddPostContainer from "./AddPost/AddPostContainer";

const Posts = (props) => {

    let postsItem = props.postData.map(el => <Post name={el.name} date={el.date} text={el.text}/>);

    return (
        <div className={styles.posts}>
            <div>
                <AddPostContainer />
            </div>
            <div>
                {postsItem}
            </div>
        </div>
    )
}
export default Posts;