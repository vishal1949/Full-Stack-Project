import React from 'react'
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class BookingForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            trip_start: '',
            trip_end: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(e) {
        e.preventDefault();
        const booking = Object.assign({}, this.state);
        this.props.createBooking(booking);
    }

    update(field){
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    render(){
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
                <div className='gray-line'></div>
                <div className='dates'>Dates</div>
                <form className='booking-form' onSubmit={this.handleSubmit}>
                    {/* <input className='date-input' type="date" placeHolder='Check in' value={this.state.trip_start}/>
                    <input className='date-input' type="date" placeHolder='Check out' value={this.state.trip_end}/> */}
                    <DateRangePicker
                        //endDate, startDate
                        startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                        startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                        endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                        endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                        onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                        focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                        onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                    />
                    <datalist>
                        <div>
                            Adults
                            <div>
                                <div>minus circle</div>
                                <div></div>
                            </div>
                        </div>
                    </datalist>
                </form>
            </div>
        )
    }
}

export default BookingForm;