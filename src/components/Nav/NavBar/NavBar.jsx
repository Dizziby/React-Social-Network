import React from 'react';
import styles from './NavBar.module.css';
import {NavLink} from "react-router-dom";

const NavBar = (props) => {
    return (
        <div className={styles.link}>
            <div>
                <NavLink to={props.link}>{props.name}</NavLink>
            </div>
        </div>
    )
}
export default NavBar;