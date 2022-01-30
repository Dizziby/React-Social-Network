import React from 'react';
import styles from './Wall.module.css';
import Posts from "./Posts/Posts";

const Wall = (props) => {
    return (
        <div className={styles.wall}>
            <Posts state={props.state} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}
export default Wall;