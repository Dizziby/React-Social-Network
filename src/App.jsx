import './App.css';
import React from 'react';
import {Route, Routes} from "react-router-dom";
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Messages from "./components/Messages/Messages";
import MyPage from "./components/MyPage/MyPage";
import Footer from "./components/Footer/Footer";
import Images from "./components/Images/Images";
import Videos from "./components/Videos/Videos";
import Friends from "./components/Friends/Friends";
import Logout from "./components/Logout/Logout";
import ContactsContainer from "./components/Contacts/ContactsContainer";


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
                <div className='app-container'>
                    <Nav/>
                    <div className='app-content'>
                        <Routes>
                            <Route path='/' element={<MyPage state={props.state} dispatch={props.dispatch}/>}/>
                            <Route path='/messages' element={<Messages/>}/>
                            <Route path='/friends' element={<Friends/>}/>
                            <Route path='/images' element={<Images/>}/>
                            <Route path='/videos' element={<Videos/>}/>
                            <Route path='/logout' element={<Logout/>}/>
                        </Routes>
                    </div>
                    <ContactsContainer/>
                </div>
            <Footer/>
        </div>
    )
}

export default App;