import './App.css';
import React from 'react';
import Contacts from './components/Contacts/Contacts';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Messages from "./components/Messages/Messages";
import {Route, Routes} from "react-router-dom";
import Wall from "./components/Wall/Wall";


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Nav/>
            <Contacts contactsList={props.state.contactsList}/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/' element={<Wall state={props.state} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>}/>
                    <Route path='/messages' element={<Messages/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App;
