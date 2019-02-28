import React from 'react';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import {Route, Link} from 'react-router-dom'
import Modal from './modal';
import Navbar from './navbar';
import NavbarContainer from './navbar_container';
import HomeSplash from './homesplash';
import {AuthRoute} from '../util/route_util';



const App = () => (

    <div>
        <Modal/>
        <header>
            <NavbarContainer/>
        </header>
        <Route path='/' component={HomeSplash} />
        <AuthRoute exact path='/login' component={LoginFormContainer} />
        <AuthRoute exact path='/signup' component={SignupFormContainer}/>
    </div>
)

export default App;