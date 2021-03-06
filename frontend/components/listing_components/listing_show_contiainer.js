import { connect } from 'react-redux';
import ListingShow from './listing_show';
import {fetchListing} from '../../actions/listing_actions'


const mapStateToProps = (state, ownProps) => {
    // debugger
    let listingId = parseInt(ownProps.match.params.listingId);
    let listing = state.entities.listings[listingId]
    let currentUser = state.entities.users;
    return({
        listingId,
        listing,
        currentUser
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        fetchListing: (id) => dispatch(fetchListing(id))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(ListingShow);