import React from 'react';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import {Route, Link} from 'react-router-dom'
import Modal from './modal';
import Navbar from './navbar';
import NavbarContainer from './navbar_container';



const App = () => (
    
    <div>
        <Modal/>
        <header>
            <NavbarContainer/>
        </header>
        {/* <Route exact path='/' component={} /> */}
        <Route path='/login' component={LoginFormContainer} />
        <Route path='/signup' component={SignupFormContainer}/>
    </div>
)

export default App;