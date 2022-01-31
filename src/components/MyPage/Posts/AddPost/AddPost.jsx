import React from 'react';
import styles from './AddPost.module.css';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/myPageRaducer";


const AddPost = (props) => {

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    };

    return (
        <div>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement}></textarea>
            </div>
            <div>
                <button onClick={onAddPost}>Publish</button>
            </div>
        </div>
    )
}
export default AddPost;