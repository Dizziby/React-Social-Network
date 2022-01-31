import React from 'react';
import styles from './Messages.module.css';
import ContactItem from "./ContactItem/ContactItem";
import Dialogs from "./Dialogs/Dialogs";

const Messages = () => {
    return (
        <div className={styles.messages}>
            <div>
                <Dialogs/>
            </div>
            <div>
                <ContactItem/>
            </div>
        </div>
    )
}
export default Messages;