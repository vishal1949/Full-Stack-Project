import React from 'react'


class ListingIndexItem extends React.Component{
    constructor(props){
        super(props)
    }
// have access to listing info and listing id

    homeType(){
        if(this.props.listing.house){
            return("ENTIRE HOUSE")
        }
    }

    render(){
        // debugger
        return(
            <div>
                <div>this is a {this.homeType()}</div>
            </div>
        )
    }
}

export default ListingIndexItem