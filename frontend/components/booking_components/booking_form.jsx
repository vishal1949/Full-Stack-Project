import React from 'react'

class BookingForm extends React.Component{
    constructor(props){
        super(props)
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
            </div>
        )
    }
}

export default BookingForm;