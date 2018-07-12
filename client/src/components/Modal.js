import React from 'react';

const Modal = props => (
  <div className="modal">
    <p>Welcome! We're glad you're here!</p>
    <p>You logged in with {localStorage.getItem('user_email')}</p>
    <button onClick={() => props.setModal(false)}>Close</button>
  </div>
);

export default Modal;