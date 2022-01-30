import React from 'react';
import styles from './Contact.module.css';
import logo from '../../../img/friend-avatar.jpg';

const Contact = (props) => {
    return (
        <div className={styles.contact}>
            <div className={styles.avatar}>
                <img src={logo} alt="logo"/>
            </div>
            <div className={styles.name}>{props.name}</div>
            <div className={styles.email}>{props.email}</div>
        </div>
    )
}
export default Contact;