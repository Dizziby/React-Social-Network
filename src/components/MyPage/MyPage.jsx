import React from 'react';
import styles from './MyPage.module.css';
import Posts from "./Posts/Posts";

const MyPage = (props) => {
    return (
        <div className={styles.wall}>
            <Posts state={props.state} dispatch={props.dispatch}/>
        </div>
    )
}
export default MyPage;