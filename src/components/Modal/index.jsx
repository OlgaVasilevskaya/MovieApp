import React from 'react';

import './modal.scss';

const Modal = ({ show, close }) => {

  return (
    <>
      {
        show ?
        <div className="modal-container" onClick={() => close()}>
          <div className="modal">
            <header>
              <h2>Sign in</h2>
            </header>

            <main className="modal-content">
              <p>Enter your username</p>
              <input type="text" />

              <p>Enter password</p>
              <input type="password" />
            </main>

            <footer className="modal-footer">
              <button className="modal-close" onClick={() => close()}>
                Cancel
              </button>

              <button className="submit">
                Submit
              </button>
            </footer>
          </div>
        </div>
        : null
      }
    </>
  );
};

export default Modal;
