export const RECEIVE_LISTING = 'RECEIVE_LISTING';
export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS';
import * as ListingApiUtil from '../util/listing_api_util'

const receiveListing = (listing) => {
    return({
        type: RECEIVE_LISTING,
        listing
    })
}

const receiveListings = (listings) => {
    return({
        type: RECEIVE_LISTINGS,
        listings
    })
}


export const createListing = (listing) => dispatch => {
    return (ListingApiUtil.createListing(listing)
        .then(listing => dispatch(receiveListing(listing))))
}

export const fetchListing = (id) => dispatch => {
    return (ListingApiUtil.fetchListing(id)
        .then((listing) => dispatch(receiveListing(listing))))
}

export const fetchListings = () => dispatch => {
    return (ListingApiUtil.fetchListings()
        .then(listings => dispatch(receiveListings(listings))))
}