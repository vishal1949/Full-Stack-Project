import React from 'react';
import ReactDOM from 'react-dom';
import {login, signup, logout} from './util/session_api_util'
import configureStore from './store/store'
import Root from './components/root';
import {fetchListing, createListing, fetchListings} from './util/listing_api_util'

document.addEventListener('DOMContentLoaded', () => {
   let store;
   if (window.currentUser) {
      const preloadedState = {
         session: { id: window.currentUser.id },
         entities: {
            users: { [window.currentUser.id]: window.currentUser }
         }
      };
      store = configureStore(preloadedState);
      // delete window.currentUser;
   } else {
      store = configureStore();
   }
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root);

 // @@@@@@@@@@@@@@@@@TESTING@@@@@@@@@@@@@@@@
    window.store = store;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.login = login;
    window.signup = signup;
    window.logout = logout;
    window.fetchListing = fetchListing;
    window.createListing = createListing;
    window.fetchListings = fetchListings;
 // @@@@@@@@@@@@@@@@@TESTING@@@@@@@@@@@@@@@@
});