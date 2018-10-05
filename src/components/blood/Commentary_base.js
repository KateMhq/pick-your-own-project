import React from "react";
import '../../styles/components/blood/Commentary_WBC.scss';
import cx from 'classnames';
import Modal from '../Modal';

class Commentary_WBC extends React.Component {
  constructor() {
    super();
    this.state={

      isOpen:false,

    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    this.setState({
      isOpen: !this.state.isOpen,

    })
  }

  render() {
    



    return (
      <ul className='whiteBloodCellCommentary'>
        <h3>{this.props.title}</h3>
        <h3 className='alert'>{this.props.alert}</h3>
        <li className='nav' onClick={this.handleClick}>Read more</li>

        <Modal className='details' show={this.state.isOpen} onClick={this.handleClick} >
          {this.props.children}
      </Modal>
      </ul>
    );
  }
}

export default Commentary_WBC;
