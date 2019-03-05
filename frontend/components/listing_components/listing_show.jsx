import React from 'react'
import BookingFormContainer from '../booking_components/booking_form_container'

class Amenity extends React.Component{
    constructor(props){
        super(props)
        this.iconCheck = this.iconCheck.bind(this);
    }
    iconCheck(){
        if(this.props.amenity === 'Kitchen'){
            return <i className="fas fa-utensils amenitiy-icon"></i>
        }else if(this.props.amenity === 'Washer'){
            return <i className="fas fa-box amenitiy-icon"></i>
        }else if(this.props.amenity === 'Dryer'){
            return <i className="fas fa-box amenitiy-icon"></i>   
        }else if(this.props.amenity === 'Tv'){
            return <i className="fas fa-tv amenitiy-icon"></i>
        }else if(this.props.amenity === 'Wifi'){
            return <i className="fas fa-wifi amenitiy-icon"></i>
        }else if(this.props.amenity === 'Ac'){
            return <i className="fas fa-square amenitiy-icon"></i>
        }else if(this.props.amenity === 'Parking'){
            return <i className="fas fa-parking amenitiy-icon"></i>
        }
    }

    render(){
        return(
            <li className='amenities-li'>
                {this.iconCheck()}
                {this.props.amenity}
            </li>
        )
    }
}


class ListingShow extends React.Component{
    constructor(props){
        super(props);
        // debugger
        this.homeType = this.homeType.bind(this);
        this.amenityCheck = this.amenityCheck.bind(this);
    }

    componentDidMount() {
        // debugger
        this.props.fetchListing(this.props.listingId);
    }

    amenityCheck(){
        // debugger
        let amenityArr = [];
        // amenityArr.push(React.createElement('li', {}, 'kitchen'))
        if(this.props.listing.kitchen){
            amenityArr.push('Kitchen');
        }
        if(this.props.listing.washer){
            amenityArr.push('Washer');
        }
        if(this.props.listing.dryer){
            amenityArr.push('Dryer');
        }
        if(this.props.listing.tv){
            amenityArr.push('Tv');
        }
        if(this.props.listing.wifi){
            amenityArr.push('Wifi');
        }
        if(this.props.listing.ac){
            amenityArr.push('Ac');
        }
        if(this.props.listing.parking_spot){
            amenityArr.push('Parking');
        }
        return amenityArr;

    }


    homeType() {
        if (this.props.listing.house) {
            return ("Entire House ")
        } else if (this.props.listing.private_room) {
            return ("Private Room")
        } else {
            return "it doest work"
        }
    }


    render(){
        if (!this.props.listing) {
            return null;
        }
        // debugger
        let elements = this.amenityCheck().map( amenity => <Amenity key={amenity} amenity={amenity}/>)
        return(
            <div>
                <div className='entire-imgs'>
                
                    <img className='first-pic' src="https://cdn.pixabay.com/photo/2017/03/22/17/39/kitchen-2165756__340.jpg" alt=""/>
                    <div>
                        <div className='four-pics'>
                            <img className='second-pic' src="https://cdn.pixabay.com/photo/2017/01/07/17/48/interior-1961070_960_720.jpg" alt=""/>
                            <img className='third-pic' src="https://cdn.pixabay.com/photo/2014/08/11/21/40/wall-416062__340.jpg" alt=""/>
                        </div>    
                        <div className='four-pics'>
                            <div className='second-pic'><img className='second-pic-img' src="https://cdn.pixabay.com/photo/2018/01/24/15/08/live-3104077__340.jpg" alt="" /></div>
                            <img className='third-pic' src="https://cdn.pixabay.com/photo/2016/04/18/08/51/bathroom-1336164__340.jpg" alt=""/>
                        </div>
                    </div>    
                </div>
            <div className='includes-booking'>
                <div className="entire-info">
                    <div className='maindisplay-user'>
                        <div>
                            <div className='home-type'>{this.homeType()}</div>
                            <h1 className='listing-title'>{this.props.listing.title}</h1>
                            <div className='city'>{this.props.listing.city}</div>
                        </div>
                        <div className='user'></div>
                    </div>
                    <div className='sections'>
                        <div className='icon-hometype'>
                            <div className='fa fa-home sizing'></div>
                            <div className='icontest'>{this.homeType()}</div>
                        </div>
                        <div className='bed-bath'>
                            <div>{this.props.listing.num_rooms} guest</div>
                            <div>{this.props.listing.num_rooms} bedroom</div>
                            <div>{this.props.listing.num_bathrooms} bath</div>
                        </div>
                    </div>
                    <div className='icon-hometype'>
                        <i className="fas fa-map-marker-alt sizing alone-icon"></i>
                        <div className='icontest2'>Great Location</div> 
                    </div>
                        <div className='description'>This place is located at {this.props.listing.address}
                    </div>
                    <div className='gray-line'></div>
                    <p className='description-full'>
                        {this.props.listing.description}
                    </p>
                    <div className='useless-link'>Read more about the space</div>
                    <div className='useless-link'>Contact host</div>
                    <div className='gray-line'></div>
                    <h3 className='amenities'>Amenities</h3>
                    <ul className='elements-amen'>
                        {elements}
                    </ul>
                    <div className='gray-line'></div>
                    <div className='amenities'>Availability</div>
                </div>
                <BookingFormContainer price={this.props.listing.price} listingId={this.props.listingId} />

            </div>
            </div>
        )
    }
}

export default ListingShow;