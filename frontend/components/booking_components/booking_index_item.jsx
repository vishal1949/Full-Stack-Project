import React from 'react'

class BookingIndexItem extends React.Component{
    constructor(props){
        super(props)
        // debugger
        this.date = this.props.booking.trip_start.toString();
        this.year = this.date.split('-')[0];
        this.month = parseInt(this.date.split('-')[1]);
        this.day = parseInt(this.date.split('-')[2])

        this.endDate = this.props.booking.trip_end.toString();
        this.endYear = this.endDate.split('-')[0];
        this.endMonth = parseInt(this.endDate.split('-')[1]);
        this.endDay = parseInt(this.endDate.split('-')[2])

        
        this.monthConvert = this.monthConvert.bind(this);
        this.dayConverter = this.dayConverter.bind(this);
        // debugger
    }

    monthConvert(num){
        if(num === 1){
            return("January")
        }
        if(num === 2){
            return ("Feburary")
        }
        if(num === 3){
            return ("March")
        }
        if(num === 4){
            return ("April")
        }
        if(num === 5){
            return ("May")
        }
        if(num === 6){
            return ("June")
        }   
        if(num === 7){
            return ("July")
        }
        if(num === 8){
            return ("August")
        }
        if(num === 9){
            return ("September")
        }
        if(num === 10){
            return ("October")
        }
        if(num === 11){
            return ("November")
        }   
        if(num === 12){
            return ("December")
        }
    }

    dayConverter(num){
        let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        return( week[num] );
    }


    render(){
        // debugger
        return(
            <div className='to-make-work'>
                <img className='booking-pic' src="https://cdn.pixabay.com/photo/2016/06/24/10/47/architecture-1477041__340.jpg" alt=""/>
                <div className='month-year'>{this.monthConvert(this.month)} {this.year}</div>
                <div className='city-something'>{this.props.city}</div>
                <div className='from-trip'>
                    <div className='from-to'>From: </div> 
                    <div className='from-to-dates'>{this.monthConvert(this.month)} {(this.day)}</div>
                </div>
                <div className='from-trip'>
                    <div className='from-to'>To: </div> 
                    <div className='from-to-dates'> {this.monthConvert(this.endMonth)} {(this.endDay)}</div>
                </div>
            </div>
        )
    }
}

export default BookingIndexItem;