import React from 'react';
import styles from './AddPost.module.css'

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
        <div className={styles.wrap}>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement}>{props.postText}</textarea>
                </div>
                <div>
                    <button className={styles.btn} onClick={onAddPost}>Publish</button>
                </div>
            </div>

        </div>
    )
}
export default AddPost;