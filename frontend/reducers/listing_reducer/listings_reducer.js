import { RECEIVE_LISTING, RECEIVE_LISTINGS } from '../../actions/listing_actions';

const listingReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_LISTING:
            let newState = Object.assign({}, state, {[action.listing.id]: action.listing});
            return newState;
        case RECEIVE_LISTINGS:
            return action.listings;
        default:
            return state;
        
    }
}

export default listingReducer