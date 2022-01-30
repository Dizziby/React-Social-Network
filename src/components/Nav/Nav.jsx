import React from 'react';
import styles from './Nav.module.css';
import NavBar from "./NavBar/NavBar";
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <div className={styles.nav}>
            Shortcuts

                {/*<NavBar name='My Pages' link='/'/>*/}
                {/*<NavBar name='Messages' link='/messages'/>*/}
                {/*<NavBar name='Friends'/>*/}
                {/*<NavBar name='Images'/>*/}
                {/*<NavBar name='Videos'/>*/}
                {/*<NavBar name='Logout'/>*/}


            <div>
                <Link to='/'>Wall</Link>
            </div>

            <div>
                <Link to='/messages'>Messages</Link>
            </div>


        </div>
    )
}
export default Nav;