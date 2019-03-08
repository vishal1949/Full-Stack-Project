import React from 'react';

import ListingIndexItem from './listing_index_item'
import ListingMap from '../listing_map';

class ListingIndex extends React.Component{
    constructor(props){
        // debugger
        super(props)
        this.listing_array = [];
    }


    componentDidMount(){
        // debugger
        this.props.fetchListings();
        // debugger
    }

    render(){
        // debugger
        
        // if(!this.props.listings) return <div>EMPTY</div>
        if (this.props.listings === undefined) {
            this.listings_array = Object.values(this.props.notlistings)
        } else { 
            this.listings_array = Object.values(this.props.listings)
        }
        return(
            //each div contains a ListingIndexItem
            <div >
                <h2 className='where-to-stay'>Where to stay</h2>
                <div className='includes-map'>
                    <div className='contains-listing-index-item'>
                        {this.listings_array.map(listing => (
                            <ListingIndexItem 
                            listing={listing}
                            key={listing.id}
                            />
                            ))}
                    </div> 
                {/* <ListingMap listings={this.props.listings}/> */}
                </div>
            </div>
        )
    }
}

export default ListingIndex;