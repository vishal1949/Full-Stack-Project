import {combineReducers} from 'redux';
import sessionErrorsReducer from './session_errors_reducer'
import bookingErrorReducer from './booking_errors_reducer'


const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    booking: bookingErrorReducer
})

export default errorsReducer