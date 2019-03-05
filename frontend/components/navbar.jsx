import React from 'react'
import {Link} from 'react-router-dom'



class Navbar extends React.Component{
    constructor(props){
        super(props)
        this.state = this.props.session;
        this.handleEvent = this.handleEvent.bind(this);
        this.logout = this.logout.bind(this);
    }

    handleEvent(e){
        e.preventDefault();
    }

    logout(e){
        e.preventDefault();
        this.props.logout();
    }

    render(){
        if (this.props.id === null){
            return(
            <>
                <header className='main-header'>
                    <div className='main-div'>
                        <Link to='/' ><img className='img' src={window.images.stayBnbLogo} alt="" /></Link>
                    </div>
                    <div className='main-div'>
                        <header className="main-navbar">
                            <div className='navbar-contents'>
                                <a href='' className='nav-link'><p className='nav-tabs'>Become a host</p></a>
                                <a href='' className='nav-link'><p className='nav-tabs'>Help</p></a>
                                <a href='' className='nav-link'
                                    onClick={e => {
                                        this.handleEvent(e);
                                        this.props.openModal("signup")
                                    }}><p className='nav-tabs'>Sign up</p>
                                </a>
                                <a href='' className='nav-link'
                                    onClick={e => {
                                        this.handleEvent(e);
                                        this.props.openModal("login")
                                    }}><p className='nav-tabs'>Login</p>
                                </a>
                            </div>
                        </header>
                    </div >
                </header >
                    <div className='gray-bar'></div>

            </>
            )
        }else {
            return (
            <>
            <header className='main-header'>
                <div className='main-div'>
                    <Link to='/' ><img className='img' src={window.images.stayBnbLogo} alt="" /></Link>
                </div>
                <div className='main-div'>
                    <header className="main-navbar">
                        <div className='navbar-contents'>
                            <a href='' className='nav-link'><p className='nav-tabs'>Add Listing</p></a>
                            <a href='' className='nav-link'><p className='nav-tabs'>Host</p></a>
                            <a href='' className='nav-link'>
                                <p className='nav-tabs'>Something 2</p>
                            </a>
                            <a href='' className='nav-link'>
                                <p className='nav-tabs'>Something </p>
                            </a>
                            <a href='' className='nav-link ' onClick={this.logout}><p className='nav-tabs'>logout</p></a> 
                            <div href='' className='for-user'><img className='user circular-square' src='https://www.kwsme.com/wp-content/uploads/2016/06/login-user-icon.png'></img></div>
                        </div>
                    </header>
                </div>
            </header>
            <div className='gray-bar'></div>
            </>
            )
        }
    }
}

export default Navbar;
