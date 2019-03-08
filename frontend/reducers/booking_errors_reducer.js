
import { RECEIVE_BOOKING, RECEIVE_BOOKING_ERROR, CLEAR_ERRORS } from "../actions/booking_actions";

const bookingErrorReducer = ( state=[], action ) => {
    switch(action.type){
        case RECEIVE_BOOKING:
            return [];
        case RECEIVE_BOOKING_ERROR:
            return action.error;
        case CLEAR_ERRORS:
            return [];
        default: 
            return state;
    }
}

export default bookingErrorReducer;