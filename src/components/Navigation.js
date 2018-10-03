import React from 'react';
import History from './History';

class Navigation extends React.Component{
  constructor(){
    super();

    this.state={
      rankingPercentile:0,
      showHistory:false,
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({
      showHistory:!showHistory,
    })
  }

  render(){
    return(
      <div>
        <h2>Health Data Analysis</h2>
        <button onClick={this.handleClick}>Reports</button>
        <p>Ranking {this.state.rankingPercentile}</p>
        {this.state.showHistory?
          <ul>
          <History/>
        </ul>: ""}
      </div>
    )
  }
}

export default Navigation;
