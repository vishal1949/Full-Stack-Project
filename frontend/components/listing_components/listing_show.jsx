import React from 'react'
import BookingFormContainer from '../booking_components/booking_form_container'
import ListingMap from '../listing_map'
import ReviewFormContainer from '../reviews/review_form_container'
import ReviewIndexContainer from '../reviews/review_index_container'

class Amenity extends React.Component{
    constructor(props){
        super(props)
        this.iconCheck = this.iconCheck.bind(this);
        this.state = {}
        // debugger
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

// -----------------------------------------------------------------------

class ListingShow extends React.Component{
    constructor(props){
        super(props);
        this.homeType = this.homeType.bind(this);
        this.amenityCheck = this.amenityCheck.bind(this);
        this.state = {
            empty: ''
        }
        this.checkForReviews = this.checkForReviews.bind(this);
    }
    
    componentDidMount() {
        // debugger
        this.props.fetchListing(this.props.listingId);
        // debugger
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

    checkForReviews(){
        if (!this.props.currentUser) {
            return(
                <div>Must be logged in to review this listing</div>
            )
        }
        else {
            return(
                // <ReviewIndexContainer listingId={this.props.listing.id} currentUser={this.props.currentUser}/>
                console.log(this.props.currentUser)
            )
        }

    }



    render(){
        if (!this.props.listing) {
            return null;
        }
        if (!this.props.listing.photo){
            this.state = {};
            return null;
        }
        // debugger
        let elements = this.amenityCheck().map( amenity => <Amenity key={amenity} amenity={amenity}/>)
        return(
            <div>
                <div className='entire-imgs'>
                    <div className='first-img-stuff'><img className='first-pic' src={this.props.listing.photo[0].picUrl} alt="" /></div>
                    <div>
                        <div className='four-pics'>
                            <div className='second-pic'>
                                <div className='opacity-stuff'></div>
                                <img className='second-pic-img opac' src={this.props.listing.photo[1].picUrl} alt="" />
                            </div>
                            <div className='second-pic'>
                                <div className='opacity-stuff'></div>
                                <img className='second-pic-img opac' src={this.props.listing.photo[2].picUrl} alt=""/>
                            </div>
                        </div>    
                        <div className='four-pics'>
                            <div className='second-pic'>
                                <div className='opacity-stuff'></div>
                                <img className='second-pic-img opac' src={this.props.listing.photo[3].picUrl} alt="" />
                                </div>
                            <div className='second-pic'>
                                <div className='opacity-stuff'></div>
                                <img className='second-pic-img opac' src={this.props.listing.photo[4].picUrl} alt=""/>
                            </div>
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
                            <div className ='thisforflex'>
                                <div className='fa fa-home sizing'></div>
                                <div className='icontest2'>{this.homeType()}</div>
                            </div>
                            {/* <div className='icontest'>{this.homeType()}</div> */}
                        </div>
                        <div className='bed-bath'>
                            <div>{this.props.listing.num_rooms} guest</div>
                            <div>{this.props.listing.num_rooms} bedroom</div>
                            <div>{this.props.listing.num_bathrooms} bath</div>
                        </div>
                    </div>
                    <div className='icon-hometype'>
                            <div className='thisforflex'>
                                <i className="fas fa-map-marker-alt sizing alone-icon"></i>
                                <div className='icontest2'>Great Location</div> 
                            </div>
                    </div>
                        <div className='description'>This place is located at {this.props.listing.address}. This place has been loved and visited because of its prime location in {this.props.listing.city}.
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
                    {/* <div className='amenities'>Availability</div> */}
                    {/* <ListingDetail listing={this.props.listing}  /> */}
                    <ReviewFormContainer />
                    {/* {this.checkForReviews} */}
                    <ReviewIndexContainer listingId={this.props.listing.id }/>
                    <div id='show-map'>
                        <ListingMap />
                    </div>
                </div>
                <BookingFormContainer price={this.props.listing.price} listingId={this.props.listingId} history={this.props.history}/>
            </div>
                
            </div>
        )
    }
}

export default ListingShow;