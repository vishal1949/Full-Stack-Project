import React, {Component} from 'react'
import ExploreTab from './explore_tab';

class HomeSplash extends Component {
    render(){
        return(

            <div id='background-splash'>
                <ExploreTab/>
                {/* <input type="text" value="Search bar here" /> */}
            </div>
        )
    }
}

export default HomeSplash;