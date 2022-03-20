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
            <div>
                <input className={styles.search} type='search' placeholder='  Search Contacts...'></input>
            </div>
            <div className={styles.contactElement}>
                {ContactElement}
            </div>
        </div>
    )
}
export default Contacts;