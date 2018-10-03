
import React from 'react';
import AggregateData from './AggregateData';
import Navigation from './Navigation';
import Notification from './Notification';
import Sections from './Sections';

import '../styles/components/app.scss';

class App extends React.Component {

  constructor(){
    super();



  }




  render(){

    return (
      <div className="personalHomePage">
        <Navigation/>
        <AggregateData/>
        <Notification/>
        <Sections/>
      </div>
    )
  }
}

export default App;
