import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

import Auth from './Auth';

import Header from './components/Header';
import Callback from './components/Callback';
import Modal from './components/Modal';
// import axios from 'axios';

// src/Auth/Auth.js

class App extends Component {
  state = {
    show_modal: false,
    cards: [
      {
        head: 'Card 1 Header',
        body: 'Body for card 1',
        style_set: 1
      },
      {
        head: 'Card 2 Header',
        body: 'Body for card 2',
        style_set: 2
      },
      {
        head: 'Card 3 Header',
        body: 'Body for card 3',
        style_set: 1
      }
    ]  
  }
  
  setModal = (value) => {
    this.setState({show_modal: value});
  }

  render() {
    const auth = new Auth(this.props.history);
    const isAuth = auth.isAuthenticated(); // Boolean true/false

    return (
      <div>
        <Header auth={auth} isAuth={isAuth} />

        {this.state.show_modal ? <Modal setModal={this.setModal} /> : ''}
              
        <Route path="/callback" render={() => (
          <Callback 
            processAuth={auth.processAuthentication}
            setModal={this.setModal} />
        )} />

        {this.state.cards.map((card, i) => (
          <div key={i} className={`card ${}`}>

          </div>
        ))}

        {/* <button onClick={auth.logout}>Logout</button> */}
      </div>  
    );
  }
}

export default withRouter(App);
