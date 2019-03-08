export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export const RECEIVE_BOOKING_ERROR = 'RECEIVE_BOOKING_ERROR'
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
import * as BookingApiUtil from '../util/booking_api_util'

const receiveBooking = (booking) => {
    return({
        type: RECEIVE_BOOKING,
        booking
    })
}

const receiveBookings = (bookings) => {
    return({
        type: RECEIVE_BOOKINGS,
        bookings
    })
}

const receiveBookingError = error => {
    return({
        type: RECEIVE_BOOKING_ERROR,
        error
    })
}

export const clearErrors = () => {
    return ({
        type: CLEAR_ERRORS
    })
}

export const createBooking = booking => dispatch => {
    // debugger
    return BookingApiUtil.createBooking(booking)
        .then((booking => 
            dispatch(receiveBooking(booking))),
            err => {
                // debugger
                dispatch(receiveBookingError(err.responseJSON))
            }
        )
}   

export const fetchBookings = () => dispatch => {
    return BookingApiUtil.fetchBookings()
        .then(bookings => {
            dispatch(receiveBookings(bookings))
        })
}