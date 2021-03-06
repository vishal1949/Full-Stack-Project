import React from 'react'
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { debug } from 'util';

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
        this.adult_count = 1;
        this.infant_count = 0;
        this.children_count = 0;

        // debugger
        this.handleSubmit = this.handleSubmit.bind(this);
        this.pluralCheck = this.pluralCheck.bind(this);
        this.guestHandler = this.guestHandler.bind(this);
        this.closeHandler = this.closeHandler.bind(this);
        this.bookCheck = this.bookCheck.bind(this);
        this.incrementCount = this.incrementCount.bind(this);
        this.shadeHandler = this.shadeHandler.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        // debugger
        if(this.state.trip_end !== null && this.state.trip_start !== null){
            const booking = Object.assign({}, this.state, {trip_start: this.state.trip_start._d, 
                trip_end: this.state.trip_end._d});
            this.props.createBooking(booking).then(() => {
                alert("Booking has been made!")
            })
            
            
        
    }
}

    bookCheck(){
        // debugger
        this.bookings = this.props.fetchBookings();
        console.log(this.bookings);
    }

    componentDidMount(){
        this.props.fetchBookings();
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

    renderErrors() {
        return (<div>{this.props.error}</div>)
    }

    incrementCount(e, type){

        e.preventDefault();
        this.setState({[this.state.num_guests]: this.state.num_guests++})
        if(type === 'adult'){
            this.adult_count++;
        }
        if(type === 'child'){
            this.children_count++;
        }
        if(type === 'infant'){
            this.infant_count++;
        }
    }


    decrementCount(e, type){

        e.preventDefault();
        if(type === 'adult'){
            if(this.adult_count > 1){
                this.adult_count--;
                this.setState({ [this.state.num_guests]: this.state.num_guests-- })
            }
        }
        if(type === 'child'){
            if (this.children_count > 0) {
                this.children_count--;
                this.setState({ [this.state.num_guests]: this.state.num_guests-- })

            }
        }
        if(type === 'infant'){
            if (this.infant_count > 0) {
                this.infant_count--;
                this.setState({ [this.state.num_guests]: this.state.num_guests-- })

            }
        }
    }

    shadeHandler(type){
        // e.preventDefault();
        // debugger
        if (type === 'adult'){
            if(this.adult_count === 0){
                document.getElementsByClassName('minus-circle')[0].classList.add('lighten')
            }
        }
        if (type === 'child'){
            if (this.adult_count === 0) {
                document.getElementsByClassName('minus-circle')[1].classList.add('lighten')
            }
        }
        if (type === 'infant'){
            if (this.adult_count === 0) {
                document.getElementsByClassName('minus-circle')[2].classList.add('lighten')
            }
        }
    }
    componentWillUnmount() {
        this.props.clearErrors();
    }

    guestHandler(e){
        e.preventDefault();
        document.getElementsByClassName('find-with')[0].classList.add('dropdown-content')
    }

    closeHandler(e){
        e.preventDefault();
        document.getElementsByClassName('dropdown-content')[0].classList.remove('dropdown-content')
    }

    render(){
        // debugger
        if( this.state.trip_end !== null && this.state.trip_start !== null){
            // debugger
            this.state.trip_start = this.state.trip_start;
            this.state.trip_end = this.state.trip_end;
            console.log(this.state.trip_end.format());
            console.log(this.state.trip_start.format());
        }
        // debugger
        // if (bookings.length < 1) return null;
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
                    <div onClick={(event) => this.guestHandler(event)} className='guest-button'>{this.state.num_guests} {this.pluralCheck()}</div>
                    <div>
                        <div className='find-with'>
                        <div className='for-flex extra-padding'>
                            <div className='adults-children only-adult'>Adults</div>
                            <div className='adult-infant-count'>
                                    <div onClick={(e) => this.decrementCount(e, 'adult')} className='minus-circle'>-</div>
                                <div className='the-count'>{this.adult_count}</div>
                                <div  onClick={(e) => this.incrementCount(e, 'adult')} className='add-circle'>+</div>
                            </div>
                        </div>
                        <div>
                            <div className='for-flex'>
                                <div>
                                    <div className='adults-children'>Children
                                        <div className='age-restricts'>Ages 2 - 12</div>
                                    </div>
                                </div>
                                <div className='adult-infant-count'>
                                        <div onClick={(e) => this.decrementCount(e, 'child')} className='minus-circle'>-</div>
                                        <div className='the-count'>{this.children_count}</div>
                                        <div onClick={(e) => this.incrementCount(e, 'child')} className='add-circle'>+</div>
                                </div>
                            </div>
                            </div>
                            <div>
                                <div className='for-flex'>
                                    <div className='adults-children'>Infants
                                        <div className='age-restricts'>Under 2</div>
                                    </div>
                                <div className='adult-infant-count'>
                                        <div onClick={(e) => this.decrementCount(e, 'infant')} className='minus-circle'>-</div>
                                    <div className='the-count'>{this.infant_count}</div>
                                    <div onClick={(e) => this.incrementCount(e, 'infant')} className='add-circle'>+</div>
                                </div>
                            </div>
                            </div>
                            <div onClick={event => this.closeHandler(event)}className='close-dropdown'>Close</div>
                        </div>
                        
                    </div>
                    <div className='booking-errors'>{this.renderErrors()}</div>
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