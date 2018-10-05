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
    const currentYearResults=this.props.whiteBloodCell.find(result => {
    return  result.year==this.props.currentYear
  })
    const yourWBC=currentYearResults? currentYearResults.your_results:'not available';



    return (
      <ul className='whiteBloodCellCommentary'>
        <h3>White blood cells</h3>
        <h3 className='alert'>Too high</h3>
        <li className='nav' onClick={this.handleClick}>Read more</li>

        <Modal className='details' show={this.state.isOpen} onClick={this.handleClick} >
          <h3 className='alert'>Your white blood cell count is {yourWBC}, exceeding the standard range</h3>
          <ul>
          <li>
            White blood cells are the cells of the immune system that are involved in
            protecting the body against both infectious disease and foreign
            invaders.
          </li>
          </ul>
          <h3 className='alert'>Implications of high white blood cells</h3>
          <ul className='explaination'>
          <li>
            An increased production of white blood cells to fight an infection
          </li>
          <li>
            A reaction to a drug that increases white blood cell production
          </li>
          <li>
            A disease of bone marrow, causing abnormally high production of white
            blood cells
          </li>
          <li>
            An immune system disorder that increases white blood cell production
          </li>
          </ul>

      </Modal>
      </ul>
    );
  }
}

export default Commentary_WBC;
