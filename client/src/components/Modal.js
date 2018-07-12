import React from 'react';

const Modal = props => (
  <div className={`modal ${props.show_modal ? 'show' : ''}`}>
    <p>Welcome! We're glad you're here!</p>
    <p>You logged in with {localStorage.getItem('user_email')}</p>
    {/* <button onClick={() => props.setModal(false)}>Close</button> */}
  </div>
);

export default Modal;