import {ADD_POST, UPDATE_NEW_POST_TEXT} from "./actionTypes";
import myPageReducer from "./myPageRaducer";
import contactsReducer from "./contactsReducer";


const store = {
    _state: {
        contactsData: [
            {name: 'Bucky Bames', email: 'wintersolder@gmail.com'},
            {name: 'Sarah Lorender', email: 'barnes@gmail.com'},
            {name: 'Jason Borne', email: 'jasonb@gmail.com'},
            {name: 'Cameron Diaz', email: 'jasonb@gmail.com'}
        ],
        myPageData: {
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
        },
        messagesData: {
            "Jason Bourne": [
                "coooooooooool dude ;)", "i know him 5 years ago", "Disney's the lizard king"
            ]
        }
    },


    _callSubscriber() {
        console.log("");
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },

    dispatch(action) {
        this._state.myPageData = myPageReducer(this._state.myPageData, action);
        this._state.contactsData = contactsReducer(this._state.contactsData, action);
        this._callSubscriber(this._state);
    }
};

export default store;