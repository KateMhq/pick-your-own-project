import React from "react";
import '../styles/components/Commentary.scss';
import cx from 'classnames';

class Commentary extends React.Component {
  constructor() {
    super();
    this.state={
      details:false,

    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    this.setState({
      details: !this.state.details,

    })
  }

  render() {
    const instruction=this.state.details?'Hide':'Read more';

    return (
      <ul className='whiteBloodCellCommentary'>
        <h3>White blood cells</h3>
        <h3 className='alert'>Too high</h3>
        <li className='nav' onClick={this.handleClick}>{instruction}</li>
          {this.state.details?<div className='details'>
          <li>
            White blood cells are the cells of the immune system that are involved in
            protecting the body against both infectious disease and foreign
            invaders.
          </li>
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
        </div>:null}
      </ul>
    );
  }
}

export default Commentary;
