import {connect} from 'react-redux'
import {fetchReviews} from '../../actions/listing_actions'
import ReviewIndex from './review_index'

const mapStateToProps = (state, ownProps) => {
    let reviews = [];
    let currentUser = state.entities.users;
    // debugger
    let listingId = ownProps.listingId;
    let result = Object.values(state.entities.reviews)
    result.map((review) => {
        if (review.listing_id === listingId){
            reviews.push(review);
        }
    });
    return({
        reviews,
        currentUser
    })
}

const mapDispatchToProps = dispatch => {
    return({
        fetchReviews: () => dispatch(fetchReviews())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex)

