import React from 'react';

import ReviewListItemContainer from './review_list_item_container';

const reviewList = (review) => (
        <ReviewListItemContainer
            review={review}/>
);

const ListingDetail = ({ listing, reviews }) => {
    return (
        <div>
            <ul className="listing-list">
                {/* <img className="index-image" src={listing.picture_url} /> */}
                <li>Rating: {listing.average_rating || 'No reviews yet'}</li>
                <li>Description: {listing.description}</li>
            </ul>
            <br />
            <div className="reviews">
                <h3>Reviews</h3>
                {reviewList(reviews)}
            </div>
        </div>
    );
};

export default ListingDetail;
