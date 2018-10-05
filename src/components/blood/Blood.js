import React from "react";
import Navigation from "../Navigation";
import Notification from "../Notification";
import Buttons from "../Buttons";
import BloodChart from "./BloodChart";
import Commentary from "./Commentary";
import cx from "classnames";
import '../../styles/components/blood/Blood.scss';

class Blood extends React.Component {
  constructor() {
    super();
    this.state = {
      bloodData: [
        { year: "2016", your_results: 9000,  standard_top: 11000, standard_buttom: 4000 },
        { year: "2017", your_results: 8680,  standard_top: 11000,standard_buttom: 4000 },
        { year: "2018", your_results: 11900, standard_top: 11000,standard_buttom: 4000 },

      ],
      currentYear:2018,
      bloodRankingPercentile: 95,
    };
  }

  render() {
    return (
      <div className="blood">
        <Navigation
          title="Blood Test"
          type="blood"
          ranking={this.state.bloodRankingPercentile}
        />
        <Notification />
        <div className='card'>
        <BloodChart bloodData={this.state.bloodData}/>
        <Commentary bloodData={this.state.bloodData} currentYear={this.state.currentYear}/>
        </div>
        <Buttons receiver={this.props.receiver}/>
      </div>
    );
  }
}

export default Blood;
