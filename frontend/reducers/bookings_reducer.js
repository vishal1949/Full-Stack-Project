
import {RECEIVE_BOOKING} from '../actions/booking_actions';
import {RECEIVE_BOOKINGS} from '../actions/booking_actions';

const bookingsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_BOOKING:
        // let id = parseInt(Object.keys(action.booking)[0])
        return Object.assign({}, state, {[parseInt(Object.keys(action.booking)[0])]: action.booking[parseInt(Object.keys(action.booking)[0])]})
        case RECEIVE_BOOKINGS:
        // debugger
            return action.bookings
        default:
            return state;
    }
}

export default bookingsReducer;