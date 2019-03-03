import { connect } from 'react-redux';
import ListingIndex from './listing_index'
import {fetchListings} from '../../actions/listing_actions'



const mapStateToProps = (state, ownProps) =>{
    // debugger
    let listings = state.entities.listings
    return({
        listings
    })
}

const mapDispatchToProps = dispatch => {
    return({
        fetchListings: () => dispatch(fetchListings())
    });
}


export default connect(mapStateToProps, mapDispatchToProps)(ListingIndex)