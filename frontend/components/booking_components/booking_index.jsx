import React from 'react'
import BookingIndexItem from './booking_index_item';
import { debug } from 'util';

class BookingIndex extends React.Component{
    constructor(props){
        // debugger
        super(props)
        // this.startDate = booking.trip_start.toString();
        // this.endDate = booking.trip_end.toString();
    }

    componentDidMount(){
        this.props.fetchBookings();
    }
    

    render(){
        // debugger
        let elements = Object.values(this.props.bookings)
        return(
            <div>
                <div className='where-you-been'>Planned Trips</div>
                <div id='entire-bookings' className='entire-booking-index'>
                    {elements.map(booking => {
                        // this.startDate = booking.trip_start.toString();
                        // this.endDate = booking.trip_end.toString();
                        if(booking.renter_id === this.props.currUserId){
                            return <BookingIndexItem booking={booking} key={booking.id} />
                        }
                    })}
                </div>
            </div>
        )
    }

}

export default BookingIndex;