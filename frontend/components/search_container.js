import {connect} from 'react-redux'
import Search from './search';
import {withRouter} from 'react-router-dom'
import { fetchListings } from '../actions/listing_actions'
import {newSearch} from '../actions/search_actions'

const mapStateToProps = state =>{
    // debugger
    return({
        listings: state.entities.listings
    })
}

const mapDispatchToProps = dispatch => {
    return({
        fetchListings: () => dispatch(fetchListings()),
        newSearch: (str) => dispatch(newSearch(str))
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search))