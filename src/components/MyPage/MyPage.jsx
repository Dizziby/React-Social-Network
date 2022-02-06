import React from 'react';
import styles from './MyPage.module.css';
import PostsContainer from "./Posts/PostsContainer";

const MyPage = (props) => {
    return (
        <div className={styles.wall}>
            <PostsContainer />
        </div>
    )
}
export default MyPage;