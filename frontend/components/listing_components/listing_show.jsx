import React from 'react'

class ListingShow extends React.Component{
    constructor(props){
        super(props);
        // debugger
        this.homeType = this.homeType.bind(this);
    }

    componentDidMount() {
        // debugger
        this.props.fetchListing(this.props.listingId);
    }


    amenityCheck(amenity){
        if(amenity){
            return (<div>Kitchen</div>);
        }

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
        // debugger
        return(
            <div>
                <div className='entire-imgs'>
                    <img className='first-pic' src="https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_960_720.jpg" alt=""/>
                    <div>
                        <div className='four-pics'>
                            <img className='second-pic' src="https://cdn.pixabay.com/photo/2017/03/22/17/39/kitchen-2165756__340.jpg" alt=""/>
                            <img className='third-pic' src="https://cdn.pixabay.com/photo/2014/08/11/21/40/wall-416062__340.jpg" alt=""/>
                        </div>    
                        <div className='four-pics'>
                            <img className='second-pic' src="https://cdn.pixabay.com/photo/2018/01/24/15/08/live-3104077__340.jpg" alt=""/>
                            <img className='third-pic' src="https://cdn.pixabay.com/photo/2016/04/18/08/51/bathroom-1336164__340.jpg" alt=""/>
                        </div>
                    </div>    
                </div>
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
                        <i class="fas fa-map-marker-alt sizing alone-icon"></i>
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
                    <div>
                        <div></div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ListingShow;