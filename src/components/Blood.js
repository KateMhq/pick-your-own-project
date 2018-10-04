import React from 'react';
import Navigation from "./Navigation";
import Notification from "./Notification";
import Buttons from "./Buttons";
import cx from 'classnames';


class Blood extends React.Component{
  constructor(){
    super();
  this.state = {
    bloodRankingPercentile:95,
  }
  };


  render(){
    return(
      <div className='blood'>
        <Navigation title='Blood Test' type='blood' ranking={this.state.bloodRankingPercentile}/>
        <Notification />
        <Buttons />
      </div>
    )
  }
}

export default Blood;
