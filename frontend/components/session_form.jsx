//component 
import React from 'react'
import { withRouter } from "react-router";
import {Link} from 'react-router-dom'

// import { Button, ButtonToolbar, Modal } from 'react-bootstrap';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    // debugger
    this.state = {
      email: "",
      password: "",
      first_name: "",
      last_name: ""
    };
    
    this.demoLogin = this.demoLogin.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeModal = this.changeModal.bind(this);
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
    if (this.props.errors.length > 0){
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
        <div id='signup-form'>
          <br/>
          <br />
          <input id='text-box' type="text" placeholder="First name"value={this.state.first_name} onChange={this.update('first_name')} className="login-input" />
          <br />
          <input id='text-box' type="text" placeholder="Last name"value={this.state.last_name} onChange={this.update('last_name')} className="login-input" />
          <br />
        </div>
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

  componentWillUnmount(){
    this.props.clearErrors();
  }

  demoLogin(e){
    this.props.demoLogin({
      email: 'demo@login',
      password: 'password'
    });
    this.props.closeModal();
  }

  changeModal(){
    // debugger
    if(this.props.formType === 'Sign up'){
      return (<Link to="/login" onClick={(e) => this.props.otherForm()}>Log in</Link>)
    }else{
      return (<Link to="/signup" onClick={(e) => this.props.otherForm()}>Sign up</Link>)
    }
  }

  render() {
    let message = ''
    if (this.props.formType === 'Sign up') {
      message = "Already have an Staybnb account? ";
    }else{
      message = "Dont have an account? "
    }
    return (

      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box" id='form-box'>
          <div onClick={this.props.closeModal} className="close-x">x</div>
          <div className="login-form">
            <br />
            {this.signupCheck(this.props.formType)}
            <input id='text-box' type="text" placeholder="Email Address" value={this.state.email} onChange={this.update('email')} className="login-input" />
            <br />
            <input id='text-box' type="password" placeholder="Password" value={this.state.password} onChange={this.update('password')} className="login-input" />
            <br/>
            <input id='check-box' type="checkbox"/>
            <label className='remember-me'>Remember me</label>
            <br/>
            <div id='signup-form'>
              <button id="session-submit" type="submit" >{this.props.formType}</button>
              {/* <div id='or-line-combo'></div> */}
              <div id='or'>or</div>
              <button id='session-submit' type='submit' onClick={this.demoLogin}>Demo login</button>
            </div>
            <br/>
            <div className='login-message'>
              {message} 
              {this.props.otherForm} 
            </div>
            {this.renderErrors()}
          </div>
        </form>
      </div>

    );
  }
}

export default withRouter(SessionForm);