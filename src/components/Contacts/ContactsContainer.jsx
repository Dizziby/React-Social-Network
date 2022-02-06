import React from 'react';
import Contacts from "./Contacts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        contactsData: state.contactsData
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

const ContactsContainer = connect (mapStateToProps, mapDispatchToProps) (Contacts);

export default ContactsContainer;