import React, {Component} from 'react'
import ExploreTab from './explore_tab';


class HomeSplash extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(

            <div id='background-splash'>
                {/* <p>hELOO</p> */}
                <ExploreTab/>
                <h2 className='recomended-for-you'> Introducing Staybnb PLus</h2>
                <div className='new-selection'>A new selection of homes verified for quality and comfort</div>
                <img className='introduce-splash' src={window.images.splashPage} alt=""/>

                <h2 className='recomended-for-you'>Recommended for you</h2>
                <div className='recommend-flex'>
                    <img className='recommend-img' src={window.images.city1} alt=""/>
                    <img className='recommend-img' src={window.images.city2} alt=""/>
                    <img className='recommend-img' src={window.images.city3} alt=""/>
                    <img className='recommend-img' src={window.images.city4} alt=""/>
                    <img className='recommend-img' src={window.images.city5} alt=""/>
                </div>
            </div>
        )
    }
}

export default HomeSplash;