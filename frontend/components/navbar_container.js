import { connect } from 'react-redux';
import React from 'react';
import {openModal} from '../actions/modal_actions';
import Navbar from './navbar';
import {logout} from '../actions/session_actions';


const mapStateToProps = state => {
    let currUser = state.session.currUser;
    //need a current user
    //set it to current user session state
    return({

    })
}

const mapDispatchToProps = dispatch => {
    return({
        openModal: (formType) => dispatch(openModal(formType)),
        logout: () => dispatch(logout())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);