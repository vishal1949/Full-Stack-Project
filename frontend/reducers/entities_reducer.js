import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import listingsReducer from './listing_reducer/listings_reducer'


const entitiesReducer = combineReducers({
    users: usersReducer,
    listings: listingsReducer
})

export default entitiesReducer;