import React from 'react'
import BookingIndexItem from './booking_index_item';
import { debug } from 'util';

class BookingIndex extends React.Component{
    constructor(props){
        debugger
        super(props)
    }

    componentDidMount(){
        this.props.fetchBookings();
    }
    

    render(){
        debugger
        let elements = Object.values(this.props.bookings)
        return(
            <div>
                <div>Where you've been</div>
                <div className='entire-booking-index'>
                    {elements.map(booking => {
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