import {connect} from 'react-redux';
import {createBooking} from '../../actions/booking_actions';
import BookingForm from './booking_form'

const mapStateToProps = (state, ownProps) => {
    let renterId = state.session.id; //gives me access to current user id
    return({
        renterId,
    })
}

const mapDispatchToProps = dispatch => {
    return({
        createBooking: (booking) => dispatch(createBooking(booking))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingForm)