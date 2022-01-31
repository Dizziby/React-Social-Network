import './App.css';
import React from 'react';
import {Route, Routes} from "react-router-dom";
import Contacts from './components/Contacts/Contacts';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Messages from "./components/Messages/Messages";
import MyPage from "./components/MyPage/MyPage";
import Footer from "./components/Footer/Footer";
import Images from "./components/Images/Images";
import Videos from "./components/Videos/Videos";
import Friends from "./components/Friends/Friends";
import Logout from "./components/Logout/Logout";


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Nav/>
            <Contacts contactsData={props.state.contactsData}/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/' element={<MyPage state={props.state} dispatch={props.dispatch}/>}/>
                    <Route path='/messages' element={<Messages/>}/>
                    <Route path='/friends' element={<Friends/>}/>
                    <Route path='/images' element={<Images/>}/>
                    <Route path='/videos' element={<Videos/>}/>
                    <Route path='/logout' element={<Logout/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    )
}

export default App;