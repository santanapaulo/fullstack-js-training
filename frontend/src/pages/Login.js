import React, { Component } from 'react';

import twitterLogo from '../twitter.svg';
import './Login.css';

export default class Login extends Component {
  state = {
    username: '',
  };

  handleInputChange = (e) => {
    this.setState({ username: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { username } = this.state;

    if (!username.length) return;

    localStorage.setItem('fullstack:username', username);

    const { history } = this.props;
    history.push('/timeline');
  }

  render() {
    return (
      <div className="login-wrapper">
        <img src={twitterLogo} alt="twitter logo"/>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Nome de usuário"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
          <button type="submit">Entrar</button>
        </form>
      </div>
    );
  }
}
