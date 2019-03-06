import {connect} from 'react-redux';
import BookingIndex from './booking_index'
import {fetchBookings} from '../../actions/booking_actions'

const mapStateToProps = (state) => {
    // debugger
    let bookings = state.entities.bookings;
    let currUserId = state.session.id;
    return({
        bookings,
        currUserId
    })
}

const mapDispatchToProps = dispatch => {
    return({
        fetchBookings: () => dispatch(fetchBookings())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingIndex)