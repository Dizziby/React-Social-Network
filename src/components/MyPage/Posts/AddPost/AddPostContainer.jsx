import React from 'react';
import {addPostAC, updateNewPostTextAC} from "../../../../redux/myPageRaducer";
import {connect} from "react-redux";
import AddPost from "./AddPost";

let mapStateToProps = (state) => {
    return {
        postText: state.myPageData.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextAC(text))
        },
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}

const AddPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddPost)

export default AddPostContainer