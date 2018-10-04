import React from 'react';
import History from './History';
import "../styles/components/Navigation.scss";

class Navigation extends React.Component{
  constructor(){
    super();

    this.state={
      showHistory:false,
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    event.preventDefault()
    this.setState({
      showHistory:!this.state.showHistory,
    })
  }

  render(){
    return(
      <div className='navigation'>
        <h2>{this.props.title}</h2>
        <div className='below'>
        <button onClick={this.handleClick}>Records</button>
        <p>Your {this.props.type} results are heathier than {this.props.ranking}% of your peers</p>
        {this.state.showHistory?
          <ul>
          <History/>
        </ul>: ""}
        </div>
      </div>
    )
  }
}

export default Navigation;
