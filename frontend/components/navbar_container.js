import { connect } from 'react-redux';
import React from 'react';
import {openModal} from '../actions/modal_actions';
import Navbar from './navbar';


const mapStateToProps = state => {
    return({

    })
}

const mapDispatchToProps = dispatch => {
    return({
        openModal: (formType) => dispatch(openModal(formType))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);