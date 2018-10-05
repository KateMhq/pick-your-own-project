import React from "react";
import Navigation from "../Navigation";
import Notification from "../Notification";
import Buttons from "../Buttons";
import BloodChart_WBC from "./BloodChart_WBC";
import Commentary_WBC from "./Commentary_WBC";
import BloodBarChart_RBC from "./BloodBarChart_RBC";
import Commentary_RBC from "./Commentary_RBC";
import BloodBarChart_TLC from "./BloodBarChart_TLC";
import Commentary_TLC from "./Commentary_TLC";
import cx from "classnames";
import "../../styles/components/blood/Blood.scss";

class Blood extends React.Component {
  constructor() {
    super();
    this.state = {
      whiteBloodCell: [
        {
          year: "2016",
          your_results: 9000,
          standard_top: 11000,
          standard_buttom: 4000
        },
        {
          year: "2017",
          your_results: 8680,
          standard_top: 11000,
          standard_buttom: 4000
        },
        {
          year: "2018",
          your_results: 11900,
          standard_top: 11000,
          standard_buttom: 4000
        }
      ],
      redBloodCell: [
        {name: 'RBC', standard_buttom: 3, yourRBC: 0.1, standard_top: 2}
        ],
        tLC: [
          {name: 'TLC', standard_buttom: 1, yourRBC: 0.1, standard_top: 4}
          ],
      currentYear: 2018,
      bloodRankingPercentile: 95
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
        <div className="card">
          <BloodChart_WBC whiteBloodCell={this.state.whiteBloodCell} />
          <Commentary_WBC
            whiteBloodCell={this.state.whiteBloodCell}
            currentYear={this.state.currentYear}
          />
        </div>
        <div className='smallCardSections'>
        <div className="smallCard">
          <BloodBarChart_RBC redBloodCell={this.state.redBloodCell} />
          <Commentary_RBC
            redBloodCell={this.state.redBloodCell}
            currentYear={this.state.currentYear}
          />
        </div>
        <div className="smallCard">
          <BloodBarChart_TLC redBloodCell={this.state.tLC} />
          <Commentary_TLC
            tLC={this.state.tLC}
            currentYear={this.state.currentYear}
          />
        </div>
        </div>
        <Buttons receiver={this.props.receiver} />
      </div>
    );
  }
}

export default Blood;
