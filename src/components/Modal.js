import React from 'react';
import ReactDOM from 'react-dom'

import '../styles/components/Modal.scss';

class Modal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    // The gray background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,1)',
      padding: 50
    };

    // The modal "window"
    const modalStyle = {

      borderRadius: 5,
      maxWidth: 500,
      minHeight: 300,
      margin: '0 auto',
      padding: 30
    };

    return ReactDOM.createPortal(
      (<div className="backdrop" style={{backdropStyle}}>
        <div className="modal" style={{modalStyle}}>
          {this.props.children}

          <div className="footer">
            <button className='nav' onClick={this.props.onClick}>
              Hide
            </button>
          </div>
        </div>
      </div>),
      document.querySelector('#modal')
    );
  }
}


export default Modal;
