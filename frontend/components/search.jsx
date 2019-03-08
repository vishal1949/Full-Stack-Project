import React from 'react';
import ListingMap from './listing_map';
import ListingIndex from './listing_components/listing_index';
import ListingIndexContainer from './listing_components/listing_index_container';
import filterListings from '../actions/selector'

class Search extends React.Component{
    constructor(props){
        // debugger
        super(props)
        this.state = {
            searchField: '',
            empty: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        // debugger
        this.props.fetchListings();
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.newSearch(this.state.searchField);
    }
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }


    render(){
        return(
            <div>
                <form onSubmit={(e) => this.handleSubmit(e)} >
                    <input className='main-search-bar' type='text' value={this.searchField} placeholder='Search' onChange={this.update('searchField')}/>
                </form>
            </div>
        )
    }
}

export default Search;