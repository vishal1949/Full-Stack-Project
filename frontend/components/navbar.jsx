import React from 'react'


class Navbar extends React.Component{
    constructor(props){
        super(props)
        this.state = this.props.session;
        this.handleEvent = this.handleEvent.bind(this);
    }

    handleEvent(e){
        e.preventDefault();
    }

    render(){
        return(
            <header>
                <a href='' 
                    onClick={e => {
                        this.handleEvent(e);
                        this.props.openModal("login")}}>Login
                </a>
                <a href=''
                    onClick={e => {
                        this.handleEvent(e);
                        this.props.openModal("signup")}}>Sign up
                </a>
            </header>
        )
    }
}

export default Navbar;
