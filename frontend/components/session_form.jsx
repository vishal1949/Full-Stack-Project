//component 
import React from 'react'
import { withRouter } from "react-router";
// import { Button, ButtonToolbar, Modal } from 'react-bootstrap';

class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            first_name: "",
            last_name: "" 
        };
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    update(field) {
      return e => this.setState({
        [field]: e.currentTarget.value
      });
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    signupCheck(formType) {

        if (formType === 'signup'){
            return(
                <>
                    <label>First Name:
                        <input type="text" value={this.state.first_name} onChange={this.update('first_name')} className="login-input" />
                    </label>
                    <br />
                    <label>Last Name:
                        <input type="text" value={this.state.last_name} onChange={this.update('last_name')} className="login-input" />
                    </label>
                    <br />
                </>
            );
        }
    }
    
    // the comment is for if i want that to show up somewhere

    render(){
        return(

            <div className="login-form-container">
                    <form onSubmit={this.handleSubmit} className="login-form-box">
                        Welcome to StayBnB!
                        <br />
                        {/* Please {this.props.formType} or {this.props.navLink} */}
                        {this.renderErrors()}
                        <div onClick={this.props.closeModal} className="close-x">X</div>
                        <div className="login-form">
                            <br />
                            {this.signupCheck(this.props.formType)}
                            <label>email:
                            <input type="text" value={this.state.email} onChange={this.update('email')} className="login-input" />
                            </label>
                            <br />
                            <label>Password:
                            <input type="password" value={this.state.password} onChange={this.update('password')} className="login-input" />
                            </label>
                            <br />
                            <   input className="session-submit" type="submit" value={this.props.formType} />
                        </div>
                    </form>
          </div>

        );
    }
}

export default withRouter(SessionForm);