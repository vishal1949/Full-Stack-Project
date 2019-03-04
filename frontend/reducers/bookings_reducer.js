import {RECEIVE_BOOKING} from '../actions/booking_actions';
import {RECEIVE_BOOKINGS} from '../actions/booking_actions';

const bookingsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_BOOKING:
            return Object.assign({}, state, {[action.booking.id]: action.booking})
        case RECEIVE_BOOKINGS:
            return action.bookings;
        default:
            return state;
    }
}

export default bookingsReducer;