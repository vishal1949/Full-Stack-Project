import React from 'react'


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
        // debugger
        
        return(
            <header className="main-navbar">
                <img className='img' src={window.images.stayBnbLogo} alt=""/>
                <div className='navbar-contents'>
                    <a href='' className='nav-link'><p className='nav-tabs'>Become a host</p></a>
                    <a href='' className='nav-link'><p className='nav-tabs'>Help</p></a>
                    <a href='' className='nav-link'
                        onClick={e => {
                            this.handleEvent(e);
                            this.props.openModal("login")
                        }}><p className='nav-tabs'>Login</p>
                    </a>
                    <a href='' className='nav-link'
                        onClick={e => {
                            this.handleEvent(e);
                            this.props.openModal("signup")
                        }}><p className='nav-tabs'>Sign up</p>
                    </a>
                    <a href='' className='nav-link' onClick={this.logout}><p className='nav-tabs'>logout</p></a>
                </div>
            </header>
        )
    }
}

export default Navbar;
