import React from 'react';

import ListingIndexItem from './listing_index_item'

class ListingIndex extends React.Component{
    constructor(props){
        // debugger
        super(props)
    }


    componentDidMount(){
        // debugger
        this.props.fetchListings();
    }

    render(){
        // debugger
        let listings_array = Object.values(this.props.listings)
        return(
            //each div contains a ListingIndexItem
            <div>
                <h2 className='where-to-stay'>Where to stay</h2>
                <div className='contains-listing-index-item'>
                    {listings_array.map(listing => (
                        <ListingIndexItem 
                            listing={listing}
                            key={listing.id}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default ListingIndex;