import React from 'react'


class ListingIndexItem extends React.Component{
    constructor(props){
        super(props)
    }
// have access to listing info and listing id

    homeType(){
        if(this.props.listing.house){
            return("ENTIRE HOUSE")
        } else if (this.props.listing.privateRoom){
            return ("PRIVATE ROOM")
        }
    }

    render(){
        return(
            <div>
                PLEASE SHOW UP ON THE PAGE
                <br/>
                <div>
                    <div>{this.homeType()}</div>
                    <div>{this.props.listing.num_rooms} BEDS</div>
                </div>
                <div>{this.props.listing.title}</div>
                <div>From ${this.props.listing.price} per night</div>
                <div>STARS GO HERE</div>
            </div>
        )
    }
}

export default ListingIndexItem