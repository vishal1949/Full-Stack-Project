import {connect} from 'react-redux';
import {createBooking, fetchBookings, clearErrors} from '../../actions/booking_actions';
import BookingForm from './booking_form'

const mapStateToProps = (state, ownProps) => {
    let renterId = state.session.id; //gives me access to current user id
    // debugger
    // let bookings = Object.values(state.entities.bookings)
    let error = state.errors.booking[0]
    return ({
        renterId,
        error
        // bookings
    })
}

const mapDispatchToProps = dispatch => {
    return({
        createBooking: (booking) => dispatch(createBooking(booking)),
        fetchBookings: () => dispatch(fetchBookings()),
        clearErrors: () => dispatch(clearErrors()),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingForm)