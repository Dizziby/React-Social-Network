import React from 'react';
import Posts from "./Posts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        postData: state.myPageData.postData
    };
};

let mapDispatchToProps = (dispatch) => {
    return {};
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;