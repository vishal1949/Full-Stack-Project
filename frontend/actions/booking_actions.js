export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
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

export const createBooking = booking => dispatch => {
    return BookingApiUtil.createBooking(booking)
        .then(booking => {
            dispatch(receiveBooking(booking))
        })
}   

export const fetchBookings = () => dispatch => {
    return BookingApiUtil.fetchBookings()
        .then(bookings => {
            dispatch(receiveBookings(bookings))
        })
}