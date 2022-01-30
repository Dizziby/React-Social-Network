import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <div className={styles.header__nav}>
                    <a href="#">Home</a>
                    <a href="#">Home2</a>
                </div>
                <div className={styles.header__avatar}>
                    <img src='../../img/user-avatar.jpg' alt='user-avatar'></img>
                </div>
                <div className={styles.header__info}>
                    <img src='../../img/user-avatar.jpg' alt='user-avatar'></img>
                </div>
                <button className={styles.header__button}></button>
                <div className={styles.header__info}>
                    <img src='../../img/user-avatar.jpg' alt='user-avatar'></img>
                </div>
            </div>
        </div>
    )
}

export default Header;