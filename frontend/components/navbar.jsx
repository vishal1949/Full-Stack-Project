import React from 'react'
import {Link} from 'react-router-dom'
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import Search from './search';

import SearchContainer from './search_container'




class Navbar extends React.Component{
    constructor(props){
        super(props)
        // debugger
        this.state = { 
            [this.props.session]: [this.props.session],
            [this.trip_start]: [this.trip_start],
            [this.trip_end]: [this.trip_end]
            };
        this.handleEvent = this.handleEvent.bind(this);
        this.logout = this.logout.bind(this);
        this.handleDates = this.handleDates.bind(this);
        // debugger
    }

    handleEvent(e){
        e.preventDefault();
    }

    handleDates(e){
        e.preventDefault
        return(
            <div>
                <DateRangePicker
                    //endDate, startDate
                    startDate={this.state.trip_start} // momentPropTypes.momentObj or null,
                    startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                    endDate={this.state.trip_end} // momentPropTypes.momentObj or null,
                    endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                    onDatesChange={({ startDate, endDate }) => this.setState({ trip_start: startDate, trip_end: endDate })} // PropTypes.func.isRequired,
                    //this.setState is altering our current state;
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                    startDatePlaceholderText='Check in'
                    endDatePlaceholderText='Check out'
                />
            </div>
        )
    }

    logout(e){
        e.preventDefault();
        this.props.logout();
    }

    checking(){
        return(console.log("IT PRINTS IT"))
    }

    render(){
        if (this.props.id === null){
            return(
            <>
                <header className='main-header'>
                    <div className='main-div'>
                        <Link to='/' ><img className='img' src={window.images.stayBnbLogo} alt="" /></Link>
                        <div className='search-bar'>
                            <SearchContainer />
                        </div>
                    </div>
                    <div className='main-div'>
                        <header className="main-navbar">
                            <div className='navbar-contents'>
                                <a href='' className='nav-link'><p className='nav-tabs'>Become a host</p></a>
                                <a href='' className='nav-link'><p className='nav-tabs'>Help</p></a>
                                <a href='' className='nav-link'
                                    onClick={e => {
                                        this.handleEvent(e);
                                        this.props.openModal("signup")
                                    }}><p className='nav-tabs'>Sign up</p>
                                </a>
                                <a href='' className='nav-link'
                                    onClick={e => {
                                        this.handleEvent(e);
                                        this.props.openModal("login")
                                    }}><p className='nav-tabs'>Login</p>
                                </a>
                            </div>
                        </header>
                    </div >
                </header >
                    <div className='gray-bar'></div>
                    <div className='main-extra-bar'>
                        <div className='extra-navbar'>
                            <button className='filters'>Dates</button>
                            <button className='filters'>Guests</button>
                            <button className='filters'>Home type</button>
                            <button className='filters'>Price</button>
                        </div>
                        <div className='switch-toggle'>
                            <div className='show-map'>Show Map</div>
                            <label className="switch">
                                <input type="checkbox" onClick={this.checking()}/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                    <div className='gray-bar'></div>

            </>
            )
        }else {
            return (
            <>
            <header className='main-header'>
                <div className='main-div'>
                    <Link to='/' ><img className='img' src={window.images.stayBnbLogo} alt="" /></Link>
                    <div className='search-bar'>
                        <SearchContainer />
                    </div>
                </div>
                <div className='main-div'>
                    <header className="main-navbar">
                        <div className='navbar-contents'>
                            <a href='' className='nav-link'><p className='nav-tabs'>Add Listing</p></a>
                            <a href='' className='nav-link'><p className='nav-tabs'>Host</p></a>
                            <a href='' className='nav-link'>
                                <p className='nav-tabs'>Help</p>
                            </a>
                            <Link to='/bookings' className='nav-link'>
                                <p className='nav-tabs'>Trips</p>
                            </Link>
                            <a href='' className='nav-link ' onClick={this.logout}><p className='nav-tabs'>Logout</p></a> 
                            <div href='' className='for-user'><img className='user circular-square' src='https://www.kwsme.com/wp-content/uploads/2016/06/login-user-icon.png'></img></div>
                        </div>
                    </header>
                </div>
            </header>
            <div className='gray-bar'></div>
                    <div className='main-extra-bar'>
                        <div className='extra-navbar'>
                            <button className='filters' onClick={event => this.handleDates(event)}>Dates</button>
                            <button className='filters'>Guests</button>
                            <button className='filters'>Home type</button>
                            <button className='filters'>Price</button>
                        </div>
                        <div className='switch-toggle'>
                            <div className='show-map'>Show Map</div>
                            <label className="switch" >
                                <input type="checkbox" onClick={() => this.checking()}/> 
                                {/* YOU CAN DO ON CLICK HERE */}
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                    <div className='gray-bar'></div>
            </>
            )
        }
    }
}

export default Navbar;
