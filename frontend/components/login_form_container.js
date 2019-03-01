import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, clearErrors} from '../actions/session_actions';
import SessionForm from './session_form';
import {openModal, closeModal} from '../actions/modal_actions';


const mapStateToProps = ({errors}) => {
    return({
        errors: errors.session,
        formType: 'Log in',
        navLink: <Link to='/' onClick={(e) => openModal('Sign up')} >Sign up?</Link>
    })
}

const mapDispatchToProps = dispatch => {
    return({
        processForm: (user) => dispatch(login(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('Log in'))}>
                Login
            </button>
        ),
        closeModal: () => dispatch(closeModal()),
        clearErrors: () => dispatch(clearErrors()),
        demoLogin: () => dispatch(login({
            email: "demo@login",
            password: "password"
        }))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)