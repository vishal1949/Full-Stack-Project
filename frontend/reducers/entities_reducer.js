import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import listingsReducer from './listing_reducer/listings_reducer'
import bookingsReducer from './bookings_reducer'
import reviewsReducer from './reviews_reducer'

const entitiesReducer = combineReducers({
    users: usersReducer,
    listings: listingsReducer,
    bookings: bookingsReducer, 
    reviews: reviewsReducer
})

export default entitiesReducer;