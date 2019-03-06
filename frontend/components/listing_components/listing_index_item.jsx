import React from 'react'
import {Link} from 'react-router-dom'

class ListingIndexItem extends React.Component{
    constructor(props){
        super(props)
        this.homeType = this.homeType.bind(this);
        this.house = this.props.listing.house;
        this.privateRoom = this.props.listing.private_room;

    }
// have access to listing info and listing id

    homeType(){
        // debugger
        if(this.house === true){
            return("ENTIRE HOUSE ")
        } else if (this.privateRoom === true){
            return ("PRIVATE ROOM ")
        }else{
            return "it doest work"
        }
    }

    startCount(){
        //eventually will need reviews!
    }

    render(){
        return(
            <Link to={`listings/${this.props.listing.id}`} className="listing-index-item">
                <img src={this.props.listing.photoUrl}></img>
                <div className='bed-and-room-info'>
                    {this.homeType()}
                    <span className="dot"> </span>
                    <div>{this.props.listing.num_rooms} BEDS</div>
                </div>
                <h3 className='title'>{this.props.listing.title}</h3>
                <div className='price'>From ${this.props.listing.price} per night</div>
                <div className='reviews'>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                </div>
            </Link>
        )
    }
}

export default ListingIndexItem