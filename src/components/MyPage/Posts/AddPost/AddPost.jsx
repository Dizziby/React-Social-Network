import React from 'react';
import styles from './AddPost.module.css'
import logo from "../../../../img/user-avatar.jpg";


const AddPost = (props) => {
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={styles.addPost}>
            <div className={styles.avatar}>
                <img src={logo} alt="logo"/>
            </div>
            <div className={styles.item}>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.postText}
                              className={styles.textarea}></textarea>
                    <button className={styles.btn} onClick={onAddPost}>Publish</button>
            </div>

        </div>
    )
}
export default AddPost;