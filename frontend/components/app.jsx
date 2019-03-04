import React from 'react';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import SessionForm from './session_form'
import { Route, Link, Switch} from 'react-router-dom'
import Modal from './modal';
import Navbar from './navbar';
import NavbarContainer from './navbar_container';
import HomeSplash from './homesplash';
import {AuthRoute} from '../util/route_util';
import ListingIndexContainer from './listing_components/listing_index_container';
import ListingShowContainer from './listing_components/listing_show_contiainer';



const App = () => (

    <div>
        <Modal/>
        <header>
            <NavbarContainer/>
        </header>
        {/* <Route exact path='/' component={HomeSplash} /> */}
        <Switch > 
            <AuthRoute exact path='/login' component={HomeSplash} />
            <AuthRoute exact path='/signup' component={HomeSplash}/>
            <Route exact path='/listings' component={ListingIndexContainer}/>
            <Route path='/listings/:listingId' component={ListingShowContainer} />
            <Route path='/' component={HomeSplash} />
        </Switch>
    </div>
)

export default App;