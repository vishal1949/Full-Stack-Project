import {
    RECEIVE_LISTING,
    RECEIVE_REVIEW,
    RECEIVE_REVIEWS
} from '../actions/listing_actions'

const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_LISTING:
            return Object.assign({}, state, action.reviews);
        case RECEIVE_REVIEW:
            const { review } = action;
            return Object.assign({}, state, { [review.id]: review });
        case RECEIVE_REVIEWS:
            return action.reviews
        default:
            return state;
    }
}

export default reviewsReducer;
