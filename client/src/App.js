import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

import Auth from './Auth';

import Header from './components/Header';
import Callback from './components/Callback';
import Modal from './components/Modal';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
// import axios from 'axios';

// src/Auth/Auth.js

class App extends Component {
  state = {
    show_modal: false
    // cards: [
    //   {
    //     head: 'Card 1 Header',
    //     body: 'Body for card 1',
    //     style_set: 1
    //   },
    //   {
    //     head: 'Card 2 Header',
    //     body: 'Body for card 2',
    //     style_set: 0
    //   },
    //   {
    //     head: 'Card 3 Header',
    //     body: 'Body for card 3',
    //     style_set: 1
    //   }
    // ]  
  }
  
  setModal = (show) => {
    if ( show ) {
      this.setState({ show_modal: true });

      setTimeout(() => {
        this.setState({ show_modal: false });
      }, 3000);
    } else this.setState({ show_modal: false });
  }

  render() {
    const auth = new Auth(this.props.history);
    const isAuth = auth.isAuthenticated(); // Boolean true/false
    // const cardStyle = set => {
    //   switch(set) {
    //     case 1:
    //       return 'style1';
    //     case 2:
    //       return 'style2';
    //     default:
    //       return 'style';
    //   }
    // } 

    return (
      <div>
        <Header auth={auth} isAuth={isAuth} />

        {/* {this.state.show_modal ? <Modal setModal={this.setModal} /> : ''} */}
        <Modal show_modal={this.state.show_modal} />


              
        <Route path="/callback" render={() => (
          <Callback 
            processAuth={auth.processAuthentication}
            setModal={this.setModal} />
        )} />

        <Route path="/" render={() => (
          <div>
            {isAuth ? <Dashboard /> : <Landing />}
          </div>
        )} />

        {/* {this.state.cards.map((card, i) => (
          <div key={i} className={`card ${card.style_set ? 'style1' : 'style2'}`}>
            <h3>{card.head}</h3>
            <p>{card.body}</p>
          </div>
        ))} */}

        {/* <button onClick={auth.logout}>Logout</button> */}
      </div>  
    );
  }
}

export default withRouter(App);
