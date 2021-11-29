import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/settings.css';

class Settings extends React.Component {
  render() {
    return (
      <div id="settingsPage">
        <h1>Página reservada para features futuros</h1>
        <Link
          to="/"
        >
          <button
            id="backToHomeFromSettings"
            type="button"
          >
            Voltar para Home
          </button>
        </Link>
      </div>
    );
  }
}

export default Settings;
