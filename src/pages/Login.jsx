import React from 'react';
import { Redirect } from 'react-router';
import LoginForm from '../components/LoginForm';
import '../styles/login.css';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      mustRedirectToSettings: false,
    };
  }

  render() {
    const { mustRedirectToSettings } = this.state;

    if (mustRedirectToSettings) {
      return (
        <Redirect to="/settings" />
      );
    }

    return (
      <main id="loginPageMain">
        <div id="loginFormContainer">
          <LoginForm />
          <button
            id="settingsBtn"
            type="button"
            onClick={ () => this.setState({ mustRedirectToSettings: true }) }
          >
            <span role="img" aria-label="Emoji Engrenagem">⚙️</span>
          </button>
        </div>
      </main>
    );
  }
}

export default Login;
