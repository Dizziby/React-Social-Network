import React from 'react';
import styles from './AddPost.module.css';

const AddPost = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Publish</button>
            </div>
        </div>
    )
}
export default AddPost;