import {ADD_POST, UPDATE_NEW_POST_TEXT} from "./actions";

let initialState = {
    postDate: [
        {
            name: "Janice Griffith",
            date: "June,2 2018 19:PM",
            text: "World\'s most beautiful car in Curabitur #test drive booking ! the most beatuiful car available in america and the saudia arabia, you can book your test drive by our official website"
        },
        {
            name: "Janice Griffith",
            date: "June,2 2018 19:PM",
            text: "Curabitur world\'s most beautiful car in #test drive booking ! the most beatuiful car available in america and the saudia arabia, you can book your test drive by our official website"
        },
        {
            name: "Janice Griffith",
            date: "June,2 2018 19:PM",
            text: "Lonely Cat Enjoying in Summer Curabitur #mypage ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc"
        },
    ],
    newPostText: "write something"
};


const myPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                name: 'Janice Griffith',
                date: 'June,2 2018 19:PM',
                text: state.newPostText
            };
            state.postDate.push(newPost);
            state.newPostText = "";
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});

export default myPageReducer;