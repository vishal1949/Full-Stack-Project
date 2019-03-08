import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, clearErrors, login } from '../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../actions/modal_actions';
const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Sign up',
        navLink: <Link to="/login" onClick={(e) => otherForm()}>Log in</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    
    return {
        processForm: (user) => dispatch(signup(user)),
        otherForm: (
            <Link to='/login' onClick={() => dispatch(openModal('login'))}>
                Log In
            </Link>
        ),
        closeModal: () => dispatch(closeModal()),
        clearErrors: () => dispatch(clearErrors()),
        demoLogin: () => dispatch(login({
            email: 'demo@login', 
            password: 'password'
        }))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
 