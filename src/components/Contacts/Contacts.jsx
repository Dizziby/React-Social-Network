import React from 'react';
import styles from './Contacts.module.css';
import Contact from "./Contact/Contact";

const Contacts = (props) => {

    let ContactElement = props.contactsData.map(el => <Contact name={el.name} email={el.email}/>);

    return (
        <div className={styles.contacts}>
            <div className={styles.title}>
                Friends
            </div>
            <div className={styles.search}>
                <input type='search' placeholder='Search Contacts...'></input>
            </div>
            {ContactElement}
        </div>
    )
}
export default Contacts;