import React from 'react';
import styles from './Nav.module.css';
import NavBar from "./NavBar/NavBar";
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <div className={styles.nav}>
            Shortcuts
            <div>
                <NavLink to='/'>MyPage</NavLink>
            </div>
            <div>
                <NavLink to='/messages'>Messages</NavLink>
            </div>
            <div>
                <NavLink to='/friends'>Friends</NavLink>
            </div>
            <div>
                <NavLink to='/images'>Images</NavLink>
            </div>
            <div>
                <NavLink to='/videos'>Videos</NavLink>
            </div>
            <div>
                <NavLink to='/logout'>Logout</NavLink>
            </div>

        </div>
    )
}
export default Nav;