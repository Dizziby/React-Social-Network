import {combineReducers, createStore} from "redux";
import myPageReducer from "./myPageRaducer";
import contactsReducer from "./contactsReducer";

let reducers = combineReducers({
    myPageData: myPageReducer,
    contactsData: contactsReducer
});

let store = createStore(reducers);

export default store;