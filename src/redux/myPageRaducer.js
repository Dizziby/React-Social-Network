import {ADD_POST, UPDATE_NEW_POST_TEXT} from "./actionTypes";

let initialState = {
    postData: [
        {
            name: "Janice Griffith",
            date: "02.03.2021, 17:02:02",
            text: "World\'s most beautiful car in Curabitur #test drive booking ! the most beatuiful car available in america and the saudia arabia, you can book your test drive by our official website"
        },
        {
            name: "Janice Griffith",
            date: "02.03.2021, 17:02:02",
            text: "Curabitur world\'s most beautiful car in #test drive booking ! the most beatuiful car available in america and the saudia arabia, you can book your test drive by our official website"
        },
        {
            name: "Janice Griffith",
            date: "02.03.2021, 17:02:02",
            text: "Lonely Cat Enjoying in Summer Curabitur #mypage ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc"
        },
    ],
    newPostText: "write something"
};

const myPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            const date = new Date().toLocaleString();
            const newPost = {
                name: 'Janice Griffith',
                date: date,
                text: state.newPostText
            };
            const stateCopy = {...state};
            stateCopy.postData = [...state.postData];
            stateCopy.postData.push(newPost);
            stateCopy.newPostText = "";
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            const stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addPostAC = () => ({type: ADD_POST})
export const updateNewPostTextAC = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})

export default myPageReducer