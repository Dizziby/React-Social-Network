import React from 'react';
import styles from './Post.module.css';
import logo from "../../../../img/user-avatar.jpg";

const Post = (props) => {
    return (
        <div className={styles.post}>
            <div>
                <div className={styles.info}>
                    <div className={styles.avatar}>
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className={styles.name}>{props.name}</div>
                    <div className={styles.date}>Published: {props.date}</div>
                </div>

                <div className={styles.text}>{props.text}</div>
            </div>
        </div>
    )
}
export default Post;