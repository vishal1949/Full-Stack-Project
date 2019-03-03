import React from 'react';
import {Link} from 'react-router-dom';

class ExploreTab extends React.Component{


    render(){
        return(
            <>
                <h2>Explore</h2>
                <Link to='/listings' className='entire-tab'>
                    <div className='link-content'>
                        <img className='explore-img' src='https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'></img>
                        <div className='link' to='/listings'>
                            <span id='p-listings'>Listings</span>
                        </div>
                    </div>
                    <div className='link-content'>
                        <img className='explore-img' src='https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'></img>
                        <div className='link' to='/listings'><span id='p-listings'>Listings</span></div>
                    </div>
                    <div className='link-content'>
                        <img className='explore-img' src='https://images.pexels.com/photos/1439965/pexels-photo-1439965.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'></img>
                        <div className='link' to='/listings'><span id='p-listings'>Listings</span></div>
                    </div>
                </Link>
            </>
        )
    }
}

export default ExploreTab