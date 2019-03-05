import {connect} from 'react-redux';
import {createBooking, fetchBookings} from '../../actions/booking_actions';
import BookingForm from './booking_form'

const mapStateToProps = (state, ownProps) => {
    let renterId = state.session.id; //gives me access to current user id
    let bookings = Object.values(state.entities.bookings)
    return ({
        renterId,
        // bookings
    })
}

const mapDispatchToProps = dispatch => {
    return({
        createBooking: (booking) => dispatch(createBooking(booking)),
        fetchBookings: () => dispatch(fetchBookings())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingForm)