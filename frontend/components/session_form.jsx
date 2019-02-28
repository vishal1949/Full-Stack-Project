//component 
import React from 'react'
import { withRouter } from "react-router";

// import { Button, ButtonToolbar, Modal } from 'react-bootstrap';

class SessionForm extends React.Component {
  constructor(props) {
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
    this.props.processForm(user).then(()=>{this.props.closeModal()});
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  renderErrors() {
    // return null;
    if (this.props.errors.length !== 0){
      return (
        <ul id="errors">
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
  }

  signupCheck(formType) {

    if (formType === 'Sign up') {
      return (
        <>
          Sign up with Fakebook or Doogle
          <br/>
          <br />
          <input id='text-box' type="text" placeholder="First name"value={this.state.first_name} onChange={this.update('first_name')} className="login-input" />
          <br />
          <input id='text-box' type="text" placeholder="Last name"value={this.state.last_name} onChange={this.update('last_name')} className="login-input" />
          <br />
        </>
      );
    }
    else {
      return (
        <div>
          <h2>Log in to continue</h2>
          <a className="facebook-link" href='https://www.facebook.com/'><b>Log in with Facebook</b></a>
        </div>
      )
    }
  }



  render() {
    return (

      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box" id='form-box'>
          {/* Please {this.props.formType} or {this.props.navLink} */}
          {this.renderErrors()}
          <div onClick={this.props.closeModal} className="close-x">x</div>
          <div className="login-form">
            <br />
            {this.signupCheck(this.props.formType)}
            <input id='text-box' type="text" placeholder="Email Address" value={this.state.email} onChange={this.update('email')} className="login-input" />
            <br />
            <input id='text-box' type="password" placeholder="Password" value={this.state.password} onChange={this.update('password')} className="login-input" />
            <br/>
            <input id= 'check-box' type="checkbox"/>
            <label> Remember me</label>
            <br/>
            <button id="session-submit" type="submit" >{this.props.formType}</button>
          </div>
        </form>
      </div>

    );
  }
}

export default withRouter(SessionForm);