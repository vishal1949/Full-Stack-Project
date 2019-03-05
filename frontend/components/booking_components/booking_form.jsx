import React from 'react'
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class BookingForm extends React.Component{
    constructor(props){
        super(props)
        // debugger
        this.state = {
            listing_id: this.props.listingId,
            trip_start: null,
            trip_end: null,
            num_guests: 1,
        }
        // debugger
        this.handleSubmit = this.handleSubmit.bind(this);
        this.pluralCheck = this.pluralCheck.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.state.trip_start = this.state.trip_start.format().toString();
        this.state.trip_end = this.state.trip_end.format().toString();
        const booking = Object.assign({}, this.state);
        // debugger
        this.props.createBooking(booking);
    }

    update(field){
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    pluralCheck(){
        if (this.state.num_guests > 1){
            return 'guests';
        }
        else {
            return 'guest';
        }
    }

    render(){
        // debugger
        if( this.state.trip_end !== null && this.state.trip_start !== null){
            // debugger
            // this.state.trip_start = this.state.trip_start.format();
            // this.state.trip_end = this.state.trip_end.format();
            console.log(this.state.trip_end.format());
            console.log(this.state.trip_start);
        }
        // debugger
        return(
            <div className='booking-form-box'>
                <div className='main-price-line'>
                    <div className='from-price'>From ${this.props.price}</div>
                    <div className='night'> / night</div>
                </div>
                <div>
                    <span className="fa fa-star checked size"></span>
                    <span className="fa fa-star checked size"></span>
                    <span className="fa fa-star checked size"></span>
                    <span className="fa fa-star checked size"></span>
                    <span className="fa fa-star size"></span>
                </div>
                <div className='other-gray-line'></div>
                <div className='dates'>Dates</div>
                <form className='booking-form' onSubmit={this.handleSubmit}>
                    <DateRangePicker
                        //endDate, startDate
                        startDate={this.state.trip_start} // momentPropTypes.momentObj or null,
                        startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                        endDate={this.state.trip_end} // momentPropTypes.momentObj or null,
                        endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                        onDatesChange={({ startDate, endDate }) => this.setState({ trip_start: startDate , trip_end: endDate  })} // PropTypes.func.isRequired,
                        //this.setState is altering our current state;
                        focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                        onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                        startDatePlaceholderText='Check in'
                        endDatePlaceholderText='Check out'
                    />
                    <div className='dates'>Guests</div>
                    <div className='guest-button'>{this.state.num_guests} {this.pluralCheck()}</div>
                    <button type='submit' className='request-button'>Request to Book</button>
                    <div className='nocharge'>You won't be charged yet</div>
                    <div className='other-gray-line'></div>
                    <div className='includes-lightbulb'>
                        <div className='extra-bot-stuff'>
                            <div className='mind'>This place is on people's mind</div>
                            <div className='views'>It's been viewed 500+ times in the past week</div>
                        </div>
                        <img className='light' src="https://img.icons8.com/color/48/000000/light-on.png"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default BookingForm;