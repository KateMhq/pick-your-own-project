import React from "react";
import Summary from "./Summary";
import Blood from "./blood/Blood";


import "../styles/components/App.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPage:'Summary',
    };

    this.receiver = this.receiver.bind(this);
  }

  receiver(subject){
    this.setState({
      currentPage:subject
    })

  }

  render() {
    return (
      <div>
        {this.state.currentPage === 'Summary' ? <Summary receiver={this.receiver}/> : null}
        {this.state.currentPage === 'Blood' ? <Blood receiver={this.receiver}/> : null}
      </div>
    );
  }
}

export default App;
